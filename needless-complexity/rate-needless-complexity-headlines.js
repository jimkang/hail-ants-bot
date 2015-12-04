var ratingSpecs = require('./needless-complexity-rating-specs');
var rateHeadlines = require('../rate-headlines');

function rateNeedlessComplexityHeadlines(headlines, done) {
  rateHeadlines(ratingSpecs, headlines, done);
}

module.exports = rateNeedlessComplexityHeadlines;
