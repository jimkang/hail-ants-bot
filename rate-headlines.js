var callNextTick = require('call-next-tick');
var ratingSpecs = require('./data/rating-specs');

function rateHeadlines(headlines, done) {
  var ratedHeadlines = headlines.filter(notTruncated).map(rateHeadline);
  console.log('ratedHeadlines:', JSON.stringify(ratedHeadlines, null, '  '));
  callNextTick(done, null, ratedHeadlines);
}

function rateHeadline(headline) {
  return {
    headline: headline,
    rating: ratingSpecs.reduce(applySpec, 0)
  };

  function applySpec(score, spec) {
    var sum = score;
    if (headline.search(spec.regex) !== -1) {
      sum += spec.score;
    }
    return sum;
  }
}

// Shouldn't bother rating truncated headlines.
function notTruncated(headline) {
  return headline.indexOf('...') !== headline.length - 3;
}

module.exports = rateHeadlines;
