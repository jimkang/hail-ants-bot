module.exports = [
  {
    regex: /(?:china|iran)\'s (?:military|forest|government|central bank) (\w+)s/ig,
    ants: 'ants $1'
  },
  {
    regex: /the (?:chinese|iranian) military is/ig,
    ants: 'ants are'
  },
  {
    regex: /(?:china\'s|iran\'s)/ig,
    ants: 'ants\''
  },
  {
    regex: /a (?:chinese|iranian)/ig,
    ants: 'an ant'
  },
  {
    regex: /(?:chinese|iranian) (?:students|sailors|people|hardliners)/ig,
    ants: 'ants'
  },
  {
    regex: /(?:chinese|iranian)/ig,
    ants: 'ant'
  },
  {
    regex: /a (?:chinese|iranian)/ig,
    ants: 'an ant'
  },
  {
    regex: /(?:china|iran) leaders/ig,
    ants: 'ants'
  },
  {
    regex: /in (?:china|iran)/ig,
    ants: 'in ant custody'
  },
  {
    regex: /(?:china|iran) (\w+)es(\W)/ig,
    ants: 'ant hive mind $1es$2'
  },
  {
    regex: /(?:china|iran) (\w+)^us(\W)/ig,
    ants: 'ant hive mind $1$2'
  },
  {
    regex: /(?:china|iran)/ig,
    ants: 'ants'
  }
];
