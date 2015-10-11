var createIsCool = require('iscool');
var fetchHeadlines = require('fetch-headlines');

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

function filteredFetchHeadlines(topic, done) {
  var opts = {
    topic: topic,
    isCool: isCool
  };
  fetchHeadlines(opts, done);
}

module.exports = filteredFetchHeadlines;
