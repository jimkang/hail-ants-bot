var config = require('./config');
var callNextTick = require('call-next-tick');
var Twit = require('twit');
var async = require('async');
var google = require('google');
var _ = require('lodash');
var antifyHeadlines = require('./antify-headlines');
var rateHeadlines = require('./rate-headlines');
var pickHeadline = require('./pick-headline');
var level = require('level');
var toTitleCase = require('titlecase');

var dryRun = false;
if (process.argv.length > 2) {
  dryRun = (process.argv[2].toLowerCase() == '--dry');
}

var twit = new Twit(config.twitter);
var usedDb = level(__dirname + '/data/used.db');

async.waterfall(
  [
    fetchHeadlines,
    parseHeadlines,
    antifyHeadlines,
    rateHeadlines,
    _.curry(pickHeadline)(usedDb),
    saveUsedHeadline,
    postTweet
  ],
  wrapUp
);

function fetchHeadlines(done) {
  google.resultsPerPage = 20;
  google.requestOptions = {
    qs: {
      hl: 'en',
      gl: 'us',
      tbm: 'nws',
      authuser: 0,
      q: 'chinese'
    }
  };
  google('', done);
}

function parseHeadlines(next, links, done) {
  callNextTick(done, null, _.pluck(links, 'title'));
}

function saveUsedHeadline(ratedHeadline, done) {
  usedDb.put(ratedHeadline.headline, (new Date()).toISOString(), putDone);
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
  debugger;
  text = toTitleCase(ratedHeadline.headline);
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
  debugger;
  if (error) {
    console.log(error, error.stack);

    if (data) {
      console.log('data:', data);
    }
  }
  else if (!dryRun) {
    console.log('Tweeted:', data);
  }
}
