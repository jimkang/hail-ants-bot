var callNextTick = require('call-next-tick');
var Twit = require('twit');
var async = require('async');
var google = require('google');
var _ = require('lodash');
var pickHeadline = require('./pick-headline');
var level = require('level');
var toTitleCase = require('titlecase');

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
var usedDb = level(__dirname + '/data/used.db');

var seed = (new Date()).toISOString();
console.log('seed:', seed);
var getTopic = createTopicGetter({
  seed: seed
});

async.waterfall(
  [
    fetchHeadlines,
    parseHeadlines,
    transformHeadlines,
    rateHeadlines,
    _.curry(pickHeadline)(usedDb),
    saveUsedHeadline,
    postTweet
  ],
  wrapUp
);

function fetchHeadlines(done) {
  google.resultsPerPage = 20;
  var topic = getTopic();
  console.log('topic', topic);

  google.requestOptions = {
    qs: {
      hl: 'en',
      gl: 'us',
      tbm: 'nws',
      authuser: 0,
      q: topic,
      num: 50
    }
  };
  google(null, done);
}

function parseHeadlines(next, links, done) {
  callNextTick(done, null, _.pluck(links, 'title'));
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
  text = text.replace(/\WUs\W/g, 'US');

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
