var callNextTick = require('call-next-tick');
var Twit = require('twit');
var async = require('async');
var _ = require('lodash');
var pickHeadline = require('./pick-headline');
var level = require('level');
var toTitleCase = require('titlecase');
var filteredFetchHeadlines = require('./filtered-fetch-headlines');
var probable = require('probable');

var configPath;

if (process.env.CONFIG) {
  configPath = './' + process.env.CONFIG
}
else {
  configPath = './config';
}

var config = require(configPath);

var transformHeadlines = require(config.modulePaths.transformHeadlines);
var rateHeadlines = require(config.modulePaths.rateHeadlines);
var createTopicGetter = require(config.modulePaths.createTopicGetter);

var dryRun = false;
if (process.argv.length > 2) {
  dryRun = (process.argv[2].toLowerCase() == '--dry');
}

var twit = new Twit(config.twitter);
var usedDb = level(__dirname + '/data/' + config.usedHeadlinesDbName);

var seed = (new Date()).toISOString();
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
    postTweet
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
  usedDb.put(ratedHeadline.headline.toLowerCase(), seed, putDone);
  function putDone(error) {
    if (error) {
      done(error);
    }
    else {
      done(error, ratedHeadline);
    }
  }
}

function postTweet(ratedHeadline, done) {
  text = toTitleCase(ratedHeadline.headline);
  text = text.replace(/(\W)Us(\W)/g, '$1US$2');

  if (dryRun) {
    console.log('Would have tweeted:', text);
    callNextTick(done, null);
  }
  else {
    var body = {
      status: text
    };
    twit.post('statuses/update', body, done);
  }
}

function wrapUp(error, data) {
  if (error) {
    console.log(error, error.stack);

    if (data) {
      console.log('data:', data);
    }
  }
  else if (!dryRun) {
    console.log('Tweeted:', data.text);
  }
}
