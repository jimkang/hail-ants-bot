var async = require('async');

function pickHeadline(usedDb, ratedHeadlines, done) {
  var sorted = ratedHeadlines.sort(rankByRating);
  pickFirstUnused(usedDb, sorted, done);
}

function rankByRating(a, b) {
  return a.rating > b.rating ? -1 : 1;
}

function pickFirstUnused(usedDb, ratedHeadlines, done) {
  async.detectSeries(
    ratedHeadlines.filter(headlineExists), headlineIsUnused, reportResult
  );

  function reportResult(result) {
    if (!result) {
      done(new Error('No result object passed to reportResult. ratedHeadlines:' +
        JSON.stringify(ratedHeadlines, null, '  '))
      );
    }
    else if (result.rating < 3) {
      done(new Error('Could not find a well-rated headline.'));
    }
    else {
      done(null, result);
    }
  }

  function headlineIsUnused(ratedHeadline, checkDone) {
    usedDb.get(
      ratedHeadline.originalHeadline.toLowerCase(), reportWhetherHeadlineWasFound
    );

    function reportWhetherHeadlineWasFound(error, value) {
      if (!error && value) {
        console.log('Found ' + ratedHeadline.originalHeadline + ' already used.');
      }
      checkDone(error && error.type === 'NotFoundError');
    }
  }
}

function headlineExists(headlinePack) {
  return headlinePack && headlinePack.headline;
}

module.exports = pickHeadline;
