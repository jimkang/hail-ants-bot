var ratingSpecs = require('./devil-ghosts-rating-specs');
var rateHeadlines = require('../rate-headlines');

function rateDevilGhostsHeadlines(headlines, done) {
  rateHeadlines(ratingSpecs, headlines, done);
}

module.exports = rateDevilGhostsHeadlines;
