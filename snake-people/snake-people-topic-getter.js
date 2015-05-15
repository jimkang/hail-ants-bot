var createProbable = require('probable').createProbable;
var seedrandom = require('seedrandom');

function createSnakePeopleTopicGetter(opts) {
  var seed;

  if (opts) {
    opts.seed = seed;
  }

  var probable = createProbable({
    random: seedrandom(seed)
  });

  var table = probable.createTableFromDef({
    '0-24': 'millennials',
    '25-29': {
      '0-3': 'occupy wall street',
      '4-5': 'occupy movement',
      '6-6': 'ows movement'
    },
    '30-39': {
      '0-2': 'helicopter parents',
      '3-3': 'trophy kids'
    },
    '40-44': 'digital natives',
    '45-59': {
      '0-4': 'generation y',
      '5-6': 'millennial generation',
      '6-6': 'generation we',
      '7-7': 'generation me',
      '8-8': 'global generation',
      '9-9': 'generation next',
      '10-10': 'net generation',
      '11-11': 'echo boomers',
      '12-12': 'new boomers',
      '13-13': 'generation flux',
      '14-14': 'generation sell',
      '15-15': 'boomerage generation',
      '16-16': 'peter pan generation',
      '17-17': 'generation 911',
      '18-18': 'The Generation of €700',
      '19-19': 'precarious generation',
      '20-20': 'mileurista'
    },
    '60-65': {
      '0-1': 'great recession',
      '2-2': 'great depression'
    },
  });

  return table.roll;
}

module.exports = createSnakePeopleTopicGetter;
