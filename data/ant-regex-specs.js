module.exports = [
  {
    regex: /(?:china|iran)\'s (?:military|forest|government|central bank) (\w+)s/ig,
    replacement: 'ants $1'
  },
  {
    regex: /the (?:chinese|iranian) military is/ig,
    replacement: 'ants are'
  },
  {
    regex: /(?:china\'s|iran\'s)/ig,
    replacement: 'ants\''
  },
  {
    regex: /a (?:chinese|iranian)/ig,
    replacement: 'an ant'
  },
  {
    regex: /(?:chinese|iranian) (?:students|sailors|people|hardliners)/ig,
    replacement: 'ants'
  },
  {
    regex: /(?:chinese|iranian)/ig,
    replacement: 'ant'
  },
  {
    regex: /a (?:chinese|iranian)/ig,
    replacement: 'an ant'
  },
  {
    regex: /(?:china|iran) leaders/ig,
    replacement: 'ants'
  },
  {
    regex: /in (?:china|iran)/ig,
    replacement: 'in ant tunnels'
  },
  {
    regex: /(?:china|iran) (\w+)es(\W)/ig,
    replacement: 'ant hive mind $1es$2'
  },
  {
    regex: /(?:china|iran) (\w+)^us(\W)/ig,
    replacement: 'ant hive mind $1$2'
  },
  {
    regex: /(?:china|iran)/ig,
    replacement: 'ants'
  }
];
