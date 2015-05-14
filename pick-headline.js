var async = require('async');

function pickHeadline(usedDb, ratedHeadlines, done) {
  var sorted = ratedHeadlines.sort(rankByRating);
  pickFirstUnused(usedDb, sorted, done);
}

function rankByRating(a, b) {
  return a.rating > b.rating ? -1 : 1;
}

function pickFirstUnused(usedDb, ratedHeadlines, done) {
  async.detect(ratedHeadlines, headlineIsUnused, reportResult);

  function reportResult(result) {
    done(null, result);
  }

  function headlineIsUnused(ratedHeadline, checkDone) {
    usedDb.get(ratedHeadline.headline.toLowerCase(), reportWhetherHeadlineWasFound);

    function reportWhetherHeadlineWasFound(error, value) {
      if (!error && value) {
        console.log('Found ' + ratedHeadline.headline + ' already used.');
      }
      checkDone(error && error.type === 'NotFoundError');
    }
  }
}

module.exports = pickHeadline;
