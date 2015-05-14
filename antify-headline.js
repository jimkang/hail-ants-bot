var antRegexSpecs = require('./data/ant-regex-specs');

function antifyHeadline(headline) {
  return antRegexSpecs.reduce(applyRegexSpec, headline);
}

function applyRegexSpec(headline, regexSpec) {
  return headline.toLowerCase().replace(regexSpec.regex, regexSpec.ants);
}

module.exports = antifyHeadline;
