var google = require('google');

function fetchHeadlines(topic, done) {
  google.resultsPerPage = 20;
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

module.exports = fetchHeadlines;
