function createTransformHeadline(opts) {
  var regexSpecs;
  if (opts) {
    regexSpecs = opts.regexSpecs;
  }

  return function transformHeadline(headlinePack) {
    return regexSpecs.reduce(applyRegexSpec, headlinePack);
  }
}

function applyRegexSpec(headlinePack, regexSpec) {
  headlinePack.headline = headlinePack.headline
    .replace(regexSpec.regex, regexSpec.replacement);
  return headlinePack;
}

module.exports = createTransformHeadline;
