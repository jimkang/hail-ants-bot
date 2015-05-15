var ratingSpecs = require('./snake-people-rating-specs');
var rateHeadlines = require('../rate-headlines');

function rateSnakePeopleHeadlines(headlines, done) {
  rateHeadlines(ratingSpecs, headlines, done);
}

module.exports = rateSnakePeopleHeadlines;
