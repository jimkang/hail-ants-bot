var createProbable = require('probable').createProbable;
var seedrandom = require('seedrandom');
var callNextTick = require('call-next-tick');

function createNeedlessComplexityTopicGetter(opts) {
  var seed;

  if (opts) {
    opts.seed = seed;
  }

  var probable = createProbable({
    random: seedrandom(seed)
  });

  var table = probable.createTableFromDef({
    '0-24': 'AngularJS',
    '25-39': 'ReactJS',
    '40-55': 'Hadoop',
    '56-64': 'model view controller'
  });

  function getTopic(done) {
    var topic = table.roll();
    console.log('topic:', topic);
    callNextTick(done, null, topic);
  }

  return getTopic;
}

module.exports = createNeedlessComplexityTopicGetter;
