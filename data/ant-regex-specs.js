module.exports = [
  {
    regex: /(?:U\.?S\.?|China|Iran|American) drones/ig,
    replacement: 'bees'
  },
  {
    regex: /drone(-use)?/ig,
    replacement: 'bee'
  },

  {
    regex: /(?:china|iran)\'s (?:military) (\w+)s/ig,
    replacement: 'army ants $1'
  },
  {
    regex: /(?:the )*(?:chinese|iranian) (?:military) is/ig,
    replacement: 'army ants are'
  },
  {
    regex: /(?:chinese|iranian|china|iran) (?:military) (also )*wants/ig,
    replacement: 'army ants $1want'
  },
  {
    regex: /(?:the )*(?:chinese|iranian) (?:military)/ig,
    replacement: 'army ants'
  },

  {
    regex: /(?:china|iran)\'s (?:forest|government|parliament|central bank) (\w+)s/ig,
    replacement: 'ants $1'
  },
  {
    regex: /(?:the )*(?:chinese|iranian) (?:forest|government|parliament|central bank) is/ig,
    replacement: 'ants are'
  },
  {
    regex: /(?:chinese|iranian|china|iran) (?:forest|government|parliament|central bank) (also )*wants/ig,
    replacement: 'ants $1want'
  },
  {
    regex: /(?:chinese|iranian|china|iran) (?:forest|government|parliament|central bank)/ig,
    replacement: 'ants'
  },

  {
    regex: /Taiwan|Taiwanese/ig,
    replacement: 'termites'
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
    regex: /(?:chinese|iranian) (?:students|sailors|people|hardliners|banks|brands)/ig,
    replacement: 'ants'
  },
  {
    regex: /(china|iran|chinese|iranian) (b|m|tr)illionaire/ig,
    replacement: 'ant colony'
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
    regex: /xi jinping/ig,
    replacement: 'hive mind'
  },
  {
    regex: /(?:china|iran)/ig,
    replacement: 'ants'
  }
];
