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

var behaviorPath;

if (process.env.BEHAVIOR) {
  behaviorPath = './' + process.env.BEHAVIOR;
} else {
  behaviorPath = './behavior';
}

var behavior = require(behaviorPath);

/*
var staticWebStream = StaticWebArchiveOnGit({
  behavior: behavior.github,
  title: behavior.archiveName,
  footerHTML: behavior.footerHTML,
  maxEntriesPerPage: 50
});
*/

var transformHeadlines = require(behavior.modulePaths.transformHeadlines);
var rateHeadlines = require(behavior.modulePaths.rateHeadlines);
var createTopicGetter = require(behavior.modulePaths.createTopicGetter);

var dryRun = false;
if (process.argv.length > 2) {
  dryRun = process.argv[2].toLowerCase() == '--dry';
}

//var twit = new Twit(behavior.twitter);
var usedDb = level(__dirname + '/data/' + behavior.usedHeadlinesDbName);

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
    topic
  };
  /*
  if (behavior.headlineSources) {
    opts.source = probable.pickFromArray(behavior.headlineSources);
  }
*/
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
  debugger;
  var text = toTitleCase(ratedHeadline.headline);
  text = text.replace(/(\W)Us(\W)/g, '$1US$2');

  if (dryRun) {
    console.log('Would have tweeted:', text);
    callNextTick(done, null);
  } else {
    /*
    var q = queue();
    q.defer(postTweet, text);
    q.defer(postToArchive, text);
    q.await(done);
*/
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
  debugger;
  if (error) {
    console.log(error, error.stack);

    if (data) {
      console.log('data:', data);
    }
  } else if (!dryRun) {
    console.log('Tweeted:', data.text);
  }
}
