var createProbable = require('probable').createProbable;
var seedrandom = require('seedrandom');
var callNextTick = require('call-next-tick');

function createSnakePeopleTopicGetter(opts) {
  var seed;

  if (opts) {
    opts.seed = seed;
  }

  var probable = createProbable({
    random: seedrandom(seed)
  });

  var table = probable.createTableFromDef({
    '0-29': 'millennials',
    '30-39': 'helicopter parents',
    '40-74': {
      '0-4': '"generation y"',
      '5-6': '"millennial generation"',
      '6-6': '"generation we"',
      '7-7': '"generation me"',
      '8-8': '"global generation"',
      '9-9': '"generation next"',
      '10-10': '"net generation"',
      '11-11': '"echo boomers"',
      '12-12': '"new boomers"',
      '13-13': '"generation flux"',
      '14-14': '"generation sell"',
      '15-15': '"boomerage generation"',
      '16-16': '"peter pan generation"',
      '17-17': '"generation 911"',
      '18-18': '"The Generation of €700"',
      '19-19': '"precarious generation"',
      '20-20': 'mileurista',
      '21-22': 'digital natives',
      '23-23': 'millennialism'
    },
    '75-79': {
      '0-1': 'great recession',
      '2-2': 'great depression'
    },
    '80-89': {
      '0-3': 'occupy wall street',
      '4-5': 'occupy movement',
      '6-6': 'ows movement'
    }
  });

  function getTopic(done) {
    var topic = table.roll();
    console.log('topic:', topic);
    callNextTick(done, null, topic);
  }

  return getTopic;
}

module.exports = createSnakePeopleTopicGetter;
