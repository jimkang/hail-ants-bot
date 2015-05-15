var ratingSpecs = require('./data/rating-specs');
var rateHeadlines = require('./rate-headlines');

function rateAntHeadlines(headlines, done) {
  rateHeadlines(ratingSpecs, headlines, done);
}

module.exports = rateAntHeadlines;
