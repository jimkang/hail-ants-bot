var antRegexSpecs = require('./data/ant-regex-specs');
var callNextTick = require('call-next-tick');

function antifyHeadlines(headlines, done) {
  callNextTick(done, null, headlines.map(antifyHeadline));
}

function antifyHeadline(headline) {
  return antRegexSpecs.reduce(applyRegexSpec, headline);
}

function applyRegexSpec(headline, regexSpec) {
  return headline.toLowerCase().replace(regexSpec.regex, regexSpec.ants);
}

module.exports = antifyHeadlines;
