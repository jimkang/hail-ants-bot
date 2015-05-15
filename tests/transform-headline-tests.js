var test = require('tape');
var createTransformHeadline = require('../transform-headline');
var antRegexSpecs = require('../data/ant-regex-specs');
var snakePeopleRegexSpecs = require('../snake-people/snake-people-regex-specs');

function runTransformOnTestCases(t, transformFn, testCases)  {
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
      transformFn(headlinePack), expectedResult, 'Transforms correctly.'
    );
  }
}

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

  var antifyHeadline = createTransformHeadline({
    regexSpecs: antRegexSpecs
  });

  runTransformOnTestCases(t, antifyHeadline, testCases);
});

test('Snake people', function snakePeople(t) {
  var testCases = [
    {
      headline: 'Echo Boomers Will Have Oversized Impact on Retail, Real Estate',
      replacement: 'Crotalids Will Have Oversized Impact on Retail, Real Estate'
    },
    {
      headline: 'Here Comes the Echo Boomer to Save the Housing Market',
      replacement: 'Here Comes the Crotalid to Save the Housing Market'
    },
    {
      headline: 'Improving Millennials\' Financial Literacy With Mobile Technology',
      replacement: 'Improving snake people\'s Financial Literacy With Mobile Technology'
    }
  ];

  var snakifyHeadline = createTransformHeadline({
    regexSpecs: snakePeopleRegexSpecs
  });

  runTransformOnTestCases(t, snakifyHeadline, testCases);
});
