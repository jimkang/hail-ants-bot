function createTransformHeadline(opts) {
  var regexSpecs;
  if (opts) {
    regexSpecs = opts.regexSpecs;
  }

  return function transformHeadline(headline) {
    return regexSpecs.reduce(applyRegexSpec, headline);
  }
}

function applyRegexSpec(headline, regexSpec) {
  return headline.replace(regexSpec.regex, regexSpec.replacement);
}

module.exports = createTransformHeadline;
