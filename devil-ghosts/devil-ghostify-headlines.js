var callNextTick = require('call-next-tick');
var createTransformHeadline = require('../transform-headline');
var devilGhostsRegexSpecs = require('./devil-ghosts-regex-specs');

var complexifyHeadline = createTransformHeadline({
  regexSpecs: devilGhostsRegexSpecs
});

function complexifyHeadlines(headlinePacks, done) {
  callNextTick(done, null, headlinePacks.map(complexifyHeadline));
}

module.exports = complexifyHeadlines;
