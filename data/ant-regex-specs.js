module.exports = [
  {
    regex: /(?:china|iran)\'s (?:military|forest|government|central bank) (\w+)s/g,
    ants: 'ants $1'
  },
  {
    regex: /the (?:chinese|iranian) military is/g,
    ants: 'ants are'
  },
  {
    regex: /(?:china\'s|iran\'s)/g,
    ants: 'ants\''
  },
  {
    regex: /a (?:chinese|iranian)/g,
    ants: 'an ant'
  },
  {
    regex: /(?:chinese|iranian) (?:students|sailors|people|hardliners)/g,
    ants: 'ants'
  },
  {
    regex: /(?:chinese|iranian)/g,
    ants: 'ant'
  },
  {
    regex: /a (?:chinese|iranian)/g,
    ants: 'an ant'
  },
  {
    regex: /(?:china|iran) leaders/g,
    ants: 'ants'
  },
  {
    regex: /in (?:china|iran)/g,
    ants: 'in ant custody'
  },
  {
    regex: /(?:china|iran) (\w+)s/g,
    ants: 'ants $1'
  },
  {
    regex: /(?:china|iran)/g,
    ants: 'ants'
  }
];
