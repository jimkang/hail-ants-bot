var test = require('tape');
var createTransformHeadline = require('../transform-headline');
var antRegexSpecs = require('../data/ant-regex-specs');

var antifyHeadline = createTransformHeadline({
  regexSpecs: antRegexSpecs
});

test('Pluralization', function pluralization(t) {
  var testCases = [
    {
      headline: 'Iran Stresses End-June Deadline as Nuclear Talks Press On',
      replacement: 'ant hive mind Stresses End-June Deadline as Nuclear Talks Press On'
    },
    {
      headline: 'ICICI Bank to Expand to China with Shanghai Branch',
      replacement: 'ICICI Bank to Expand to ants with Shanghai Branch'
    },
    {
      headline: 'China\'s Violations Leave in Doubt Extension of US Nuke Pact',
      replacement: 'ants\' Violations Leave in Doubt Extension of US Nuke Pact'
    },
    // TODO: When it actually parses parts of speech.
    // {
    //   headline: 'Why don\'t Chinese spend more on US homes?',
    //   replacement: 'Why Don\'t ants Spend More on US Homes?'
    // },
    {
      headline: 'China Housing Market Shows Signs of Life',
      replacement: 'ants Housing Market Shows Signs of Life'
    },
    {
      headline: 'Kerry to tell China US committed to free South China Sea movement',
      replacement: 'Kerry to tell ants US committed to free South ants Sea movement'
    },
    {
      headline: 'China imposes smartwatch and wearable tech army ban',
      replacement: 'ant hive mind imposes smartwatch and wearable tech army ban',
    }
  ];

  t.plan(testCases.length);

  testCases.forEach(runTestCase);

  function runTestCase(testCase) {
    var headlinePack = {
      headline: testCase.headline
    };
    var expectedResult = {
      headline: testCase.replacement
    };

    t.deepEqual(
      antifyHeadline(headlinePack), expectedResult, 'Antifies correctly.'
    );
  }
});
