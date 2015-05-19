var FeedParser = require('feedparser');
var request = require('request');

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
      if (item && item.title) {
        titles.push(item.title);
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

module.exports = fetchHeadlines;
