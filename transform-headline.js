var _ = require('lodash');
var probable = require('probable');

function createTransformHeadline(opts) {
  var regexSpecs;
  if (opts) {
    regexSpecs = opts.regexSpecs;
  }

  return function transformHeadline(headlinePack) {
    headlinePack.originalHeadline = headlinePack.headline;
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

  var replacement = regexSpec.replacement;
  if (Array.isArray(replacement)) {
    replacement = probable.pickFromArray(replacement);
  }

  transformedPack.headline = headlinePack.headline
    .replace(regexSpec.regex, replacement);
  return transformedPack;
}

module.exports = createTransformHeadline;
