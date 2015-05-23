var FeedParser = require('feedparser');
var request = require('request');
var createIsCool = require('iscool');
var _  = require('lodash');

var isCool = createIsCool({
  customWhitelist: [
    'gaza',
    'israel',
    'palestine',
    'invasion',
    'plane',
    'missile',
    'airstrike',
    'brigadier',
    'idf',
    'isis',
    'iraq',
    'accident',
    'depression',
    'gun',
    'ukraine',
    'jihad',
    'cop',
    'police',
    'officer',
    'nepal',
    'katmandu',
    'gray',
    'train',
    'philadelphia'
  ],
  falsePositives: []
});

function fetchHeadlines(topic, done) {
  var titles = [];
  var req = request('https://news.google.com/news?q=' + topic + '&output=rss');
  var feedparser = new FeedParser();

  req.on('error', passBackError);
  req.on('response', pipeResponseToFeedParser);

  feedparser.on('error', passBackError);
  feedparser.on('readable', collectTitles);
  feedparser.on('end', passBackTitles);

  function collectTitles() {
    var stream = this;
    var item;

    while ((item = stream.read())) {
      if (item && item.title && titleIsCool(item.title)) {
        titles.push(trimSiteFromTitle(item.title));
      }
    }
  }

  function pipeResponseToFeedParser(res) {
    var stream = this;
   
    if (res.statusCode !== 200) {
      done(new Error('Bad status code'));
    }
    else {
      stream.pipe(feedparser);
    }
  }

  function passBackError(error) {
    done(error);
  }

  function passBackTitles() {
    done(null, titles);
  }
}

function trimSiteFromTitle(title) {
  var parts = title.split(' - ');
  if (parts.length < 2) {
    return title;
  }
  else {
    return parts.slice(0, parts.length - 1).join(' - ');
  }
}

function titleIsCool(title) {
  var words = _.compact(title.split(/\W/));
  return words.every(isCool);
}

module.exports = fetchHeadlines;
