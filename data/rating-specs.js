module.exports = [
  {
    regex: /military|\Wwar\W|nuclear|nuke|\Warms\W|seized|capabilities|pentagon|drill|brinksmanship/i,
    score: 5
  },
  {
    regex: /bank|currenc|econom/i,
    score: 5
  },
  {
    regex: /government/i,
    score: 5
  },
  {
    regex: /students/i,
    score: 2
  },
  {
    regex: /company|brokerage|investors/i,
    score: 2
  },
  {
    regex: /leaders/i,
    score: 5
  },
  {
    regex: /china|iran/i,
    score: 1
  },
  {
    regex: /chinese|iranian/i,
    score: 1
  },
  {
    regex: /clinton|kerry/i,
    score: 2
  },
  {
    regex: /obama/i,
    score: 3
  },
  {
    regex: /market|stock|import|export/i,
    score: 5
  },
  {
    regex: /bought|buying|buyer/i,
    score: 3
  },
  {
    regex: /why|what|analysis|analyst|how/i,
    score: 2
  },
  {
    regex: /illion|massive/i,
    score: 5
  },
  {
    regex: /afraid|fear|mistrust|worry/i,
    score: 5
  },
  {
    regex: /secret|espionage/i,
    score: 5
  },
  {
    regex: /hardliner|policy/i,
    score: 5
  },
  {
    regex: /power|dominance/i,
    score: 5
  },
  {
    regex: /counterfeit/i,
    score: 5
  },
  {
    regex: /cyber/i,
    score: 5
  },
  {
    regex: /trafficking/i,
    score: 2
  },
  {
    regex: /talks|visit|summit|bilateral/i,
    score: 2
  }
];
