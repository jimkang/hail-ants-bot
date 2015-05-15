var callNextTick = require('call-next-tick');
var createTransformHeadline = require('../transform-headline');
var snakePeopleRegexSpecs = require('./snake-people-regex-specs');

var snakifyHeadline = createTransformHeadline({
  regexSpecs: snakePeopleRegexSpecs
});

function snakifyHeadlines(headlinePacks, done) {
  callNextTick(done, null, headlinePacks.map(snakifyHeadline));
}

module.exports = snakifyHeadlines;
