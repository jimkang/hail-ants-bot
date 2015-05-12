var createProbable = require('probable').createProbable;
var seedrandom = require('seedrandom');

function createTopicGetter(opts) {
  var seed;

  if (opts) {
    opts.seed = seed;
  }

  var probable = createProbable({
    random: seedrandom(seed)
  });

  var table = probable.createTableFromDef({
    '0-39': {
      '0-2': 'chinese',
      '3-4': 'china'
    },
    '40-59': {
      '0-2': 'iranian',
      '3-4': 'iran'
    }
  });

  return table.roll;
}

module.exports = createTopicGetter;
