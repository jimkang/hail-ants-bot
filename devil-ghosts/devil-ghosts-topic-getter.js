var createProbable = require('probable').createProbable;
var seedrandom = require('seedrandom');
var callNextTick = require('call-next-tick');

function createDevilGhostsTopicGetter(opts) {
  var seed;

  if (opts) {
    opts.seed = seed;
  }

  var probable = createProbable({
    random: seedrandom(seed)
  });

  var table = probable.createTableFromDef({
    '0-24': 'algorithm',
    '25-39': 'algorithmic',
    '40-59': 'big data',
    '60-64': 'internet of things',
    '65-74': 'blockchain',
    '75-79': 'cryptocurrency'
  });

  function getTopic(done) {
    var topic = table.roll();
    console.log('topic:', topic);
    callNextTick(done, null, topic);
  }

  return getTopic;
}

module.exports = createDevilGhostsTopicGetter;
