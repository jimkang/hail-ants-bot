module.exports = [
  {
    regex: /military|\Wwar\W|nuclear|\Warms\W|seized|capabilities|pentagon|drill/,
    score: 5
  },
  {
    regex: /bank|currenc|econom/,
    score: 5
  },
  {
    regex: /government/,
    score: 5
  },
  {
    regex: /students/,
    score: 2
  },
  {
    regex: /company|brokerage|investors/,
    score: 2
  },
  {
    regex: /leaders/,
    score: 5
  },
  {
    regex: /ant/,
    score: 1
  },
  {
    regex: /chinese|iranian/,
    score: 1
  },
  {
    regex: /clinton|kerry/,
    score: 2
  },
  {
    regex: /obama/,
    score: 3
  },
  {
    regex: /market|stock|import|export/,
    score: 5
  },
  {
    regex: /bought|buying|buyer/,
    score: 3
  },
  {
    regex: /why|analysis/,
    score: 2
  },
  {
    regex: /illion|massive/,
    score: 5
  },
  {
    regex: /afraid|fear|mistrust/,
    score: 5
  },
  {
    regex: /secret|espionage/,
    score: 5
  },
  {
    regex: /hardliner|policy/,
    score: 5
  },
  {
    regex: /power|dominance/,
    score: 5
  },
  {
    regex: /counterfeit/,
    score: 5
  },
  {
    regex: /cyber/,
    score: 5
  },
  {
    regex: /talks|visit|summit/,
    score: 2
  }
];
