/* global process, __dirname */

var callNextTick = require('call-next-tick');
var Twit = require('twit');
var async = require('async');
var _ = require('lodash');
var pickHeadline = require('./pick-headline');
var level = require('level');
var toTitleCase = require('titlecase');
var filteredFetchHeadlines = require('./filtered-fetch-headlines');
var probable = require('probable');
var StaticWebArchiveOnGit = require('static-web-archive-on-git');
var queue = require('d3-queue').queue;
var randomId = require('idmaker').randomId;

var configPath;

if (process.env.CONFIG) {
  configPath = './' + process.env.CONFIG;
} else {
  configPath = './config';
}

var config = require(configPath);

var staticWebStream = StaticWebArchiveOnGit({
  config: config.github,
  title: config.archiveName,
  footerScript: `<script type="text/javascript">
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-49491163-1', 'jimkang.com');
  ga('send', 'pageview');
</script>`,
  maxEntriesPerPage: 50
});

var transformHeadlines = require(config.modulePaths.transformHeadlines);
var rateHeadlines = require(config.modulePaths.rateHeadlines);
var createTopicGetter = require(config.modulePaths.createTopicGetter);

var dryRun = false;
if (process.argv.length > 2) {
  dryRun = process.argv[2].toLowerCase() == '--dry';
}

var twit = new Twit(config.twitter);
var usedDb = level(__dirname + '/data/' + config.usedHeadlinesDbName);

var seed = new Date().toISOString();
console.log('seed:', seed);
var getTopic = createTopicGetter({
  seed: seed
});

async.waterfall(
  [
    getTopic,
    runFilteredFetchHeadlines,
    rateHeadlines,
    transformHeadlines,
    _.curry(pickHeadline)(usedDb),
    saveUsedHeadline,
    postToTargets
  ],
  wrapUp
);

function runFilteredFetchHeadlines(topic, done) {
  var opts = {
    topic: topic,
    twit: twit
  };

  if (config.headlineSources) {
    opts.source = probable.pickFromArray(config.headlineSources);
  }

  filteredFetchHeadlines(opts, done);
}

function saveUsedHeadline(ratedHeadline, done) {
  usedDb.put(ratedHeadline.originalHeadline.toLowerCase(), seed, putDone);
  function putDone(error) {
    if (error) {
      done(error);
    } else {
      done(error, ratedHeadline);
    }
  }
}

function postToTargets(ratedHeadline, done) {
  var text = toTitleCase(ratedHeadline.headline);
  text = text.replace(/(\W)Us(\W)/g, '$1US$2');

  if (dryRun) {
    console.log('Would have tweeted:', text);
    callNextTick(done, null);
  } else {
    var q = queue();
    q.defer(postTweet, text);
    q.defer(postToArchive, text);
    q.await(done);
  }
}

function postTweet(text, done) {
  var body = {
    status: text
  };
  twit.post('statuses/update', body, done);
}

function postToArchive(text, done) {
  var id = 'news-' + randomId(8);
  staticWebStream.write({
    id,
    date: new Date().toISOString(),
    caption: text
  });
  staticWebStream.end(done);
}

function wrapUp(error, data) {
  if (error) {
    console.log(error, error.stack);

    if (data) {
      console.log('data:', data);
    }
  } else if (!dryRun) {
    console.log('Tweeted:', data.text);
  }
}
