var test = require('tape');
var antifyHeadline = require('../antify-headline');

test('Pluralization', function pluralization(t) {
  var testCases = [
    {
      headline: 'Iran Stresses End-June Deadline as Nuclear Talks Press On',
      antified: 'ant hive mind Stresses End-June Deadline as Nuclear Talks Press On'
    },
    {
      headline: 'ICICI Bank to Expand to China with Shanghai Branch',
      antified: 'ICICI Bank to Expand to ants with Shanghai Branch'
    },
    {
      headline: 'China\'s Violations Leave in Doubt Extension of US Nuke Pact',
      antified: 'ants\' Violations Leave in Doubt Extension of US Nuke Pact'
    },
    // TODO: When it actually parses parts of speech.
    // {
    //   headline: 'Why don\'t Chinese spend more on US homes?',
    //   antified: 'Why Don\'t ants Spend More on US Homes?'
    // },
    {
      headline: 'China Housing Market Shows Signs of Life',
      antified: 'ants Housing Market Shows Signs of Life'
    },
    {
      headline: 'Kerry to tell China US committed to free South China Sea movement',
      antified: 'Kerry to tell ants US committed to free South ants Sea movement'
    },
    {
      headline: 'China imposes smartwatch and wearable tech army ban',
      antified: 'ant hive mind imposes smartwatch and wearable tech army ban',
    }
  ];

  t.plan(testCases.length);

  testCases.forEach(runTestCase);

  function runTestCase(testCase) {
    t.equal(
      antifyHeadline(testCase.headline), testCase.antified, 'Antifies correctly.'
    );
  }
});
