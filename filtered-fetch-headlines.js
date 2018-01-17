var createIsCool = require('iscool');
var fetchHeadlines = require('fetch-headlines');
var _ = require('lodash');

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

function filteredFetchHeadlines(opts, done) {
  var fetchOpts = _.clone(opts);
  fetchOpts.isCool = isCool;
  fetchHeadlines(fetchOpts, stripAtsFromHeadlines);

  function stripAtsFromHeadlines(error, headlines) {
    if (error) {
      done(error);
    } else {
      done(error, headlines.map(stripAts).map(stripLinks));
    }
  }
}

function stripAts(s) {
  return s.replace(/@/g, '');
}

function stripLinks(s) {
  return s.replace(/https*:\/\/.*\b/g, '');
}

module.exports = filteredFetchHeadlines;
