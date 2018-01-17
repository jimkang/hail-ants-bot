var createProbable = require('probable').createProbable;
var seedrandom = require('seedrandom');
var callNextTick = require('call-next-tick');

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
    '40-69': {
      '0-2': 'iranian',
      '3-4': 'iran'
    },
    '70-89': 'drones'
  });

  function getTopic(done) {
    callNextTick(done, null, table.roll());
  }

  return getTopic;
}

module.exports = createTopicGetter;
