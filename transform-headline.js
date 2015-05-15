var _ = require('lodash');

function createTransformHeadline(opts) {
  var regexSpecs;
  if (opts) {
    regexSpecs = opts.regexSpecs;
  }

  return function transformHeadline(headlinePack) {
    var transformedPack = regexSpecs.reduce(applyRegexSpec, headlinePack);
    if (transformedPack.headline === headlinePack.headline) {
      // Mark that headline could not be transformed.
      transformedPack.headline = undefined;
    }
    return transformedPack;
  }
}

function applyRegexSpec(headlinePack, regexSpec) {
  var transformedPack = _.cloneDeep(headlinePack);
  transformedPack.headline = headlinePack.headline
    .replace(regexSpec.regex, regexSpec.replacement);
  return transformedPack;
}

module.exports = createTransformHeadline;
