module.exports = [
  {
    regex: /(?:U\.?S\.?|China|Iran|American) drones/gi,
    replacement: 'bees'
  },
  {
    regex: /drone(-use)?/gi,
    replacement: 'bee'
  },
  {
    regex: /quadcopter/gi,
    replacement: 'wasp'
  },
  {
    regex: /UAV/g,
    replacement: 'Apoidea'
  },
  {
    regex: /model aircraft/gi,
    replacement: 'honey bees'
  },

  {
    regex: /(?:china|iran)\'s (?:military) (\w+)s/gi,
    replacement: 'army ants $1'
  },
  {
    regex: /(?:the )*(?:chinese|iranian) (?:military) is/gi,
    replacement: 'army ants are'
  },
  {
    regex: /(?:chinese|iranian|china|iran) (?:military) (also )*wants/gi,
    replacement: 'army ants $1want'
  },
  {
    regex: /(?:the )*(?:chinese|iranian) (?:military)/gi,
    replacement: 'army ants'
  },

  {
    regex: /(?:china|iran)\'s (?:forest|government|parliament|central bank) (\w+)s/gi,
    replacement: 'ants $1'
  },
  {
    regex: /(?:the )*(?:chinese|iranian) (?:forest|government|parliament|central bank) is/gi,
    replacement: 'ants are'
  },
  {
    regex: /(?:chinese|iranian|china|iran) (?:forest|government|parliament|central bank) (also )*wants/gi,
    replacement: 'ants $1want'
  },
  {
    regex: /(?:chinese|iranian|china|iran) (?:forest|government|parliament|central bank)/gi,
    replacement: 'ants'
  },

  {
    regex: /Taiwan|Taiwanese/gi,
    replacement: 'termites'
  },

  {
    regex: /(?:china\'s|iran\'s)/gi,
    replacement: "ants'"
  },
  {
    regex: /a (?:chinese|iranian)/gi,
    replacement: 'an ant'
  },
  {
    regex: /(?:chinese|iranian) (?:students|sailors|people|hardliners|banks|brands)/gi,
    replacement: 'ants'
  },
  {
    regex: /(china|iran|chinese|iranian) (b|m|tr)illionaire/gi,
    replacement: 'ant colony'
  },
  {
    regex: /(?:chinese|iranian)/gi,
    replacement: 'ant'
  },
  {
    regex: /a (?:chinese|iranian)/gi,
    replacement: 'an ant'
  },
  {
    regex: /(?:china|iran) leaders/gi,
    replacement: 'ants'
  },
  {
    regex: /in (?:china|iran)/gi,
    replacement: 'in ant tunnels'
  },
  {
    regex: /(?:china|iran) (\w+)es(\W)/gi,
    replacement: 'ant hive mind $1es$2'
  },
  {
    regex: /(?:china|iran) (\w+)^us(\W)/gi,
    replacement: 'ant hive mind $1$2'
  },
  {
    regex: /xi jinping/gi,
    replacement: 'hive mind'
  },
  {
    regex: /(?:china|iran)/gi,
    replacement: 'ants'
  }
];
