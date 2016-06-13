var callNextTick = require('call-next-tick');
var createTransformHeadline = require('../transform-headline');
var devilGhostsRegexSpecs = require('./devil-ghosts-regex-specs');

var devilGhostifyHeadline = createTransformHeadline({
  regexSpecs: devilGhostsRegexSpecs
});

function devilGhostifyHeadlines(headlinePacks, done) {
  callNextTick(done, null, headlinePacks.map(devilGhostifyHeadline));
}

module.exports = devilGhostifyHeadlines;
