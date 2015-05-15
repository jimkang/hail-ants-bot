var callNextTick = require('call-next-tick');
var createTransformHeadline = require('./transform-headline');
var antRegexSpecs = require('./data/ant-regex-specs');

var antifyHeadline = createTransformHeadline({
  regexSpecs: antRegexSpecs
});

function antifyHeadlines(headlines, done) {
  callNextTick(done, null, headlines.map(antifyHeadline));
}

module.exports = antifyHeadlines;
