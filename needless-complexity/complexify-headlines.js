var callNextTick = require('call-next-tick');
var createTransformHeadline = require('../transform-headline');
var needlessComplexityRegexSpecs = require('./needless-complexity-regex-specs');

var complexifyHeadline = createTransformHeadline({
  regexSpecs: needlessComplexityRegexSpecs
});

function complexifyHeadlines(headlinePacks, done) {
  callNextTick(done, null, headlinePacks.map(complexifyHeadline));
}

module.exports = complexifyHeadlines;
