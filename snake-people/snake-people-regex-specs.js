module.exports = [
  // millennial
  {
    regex: /\bmillennials\'/gi,
    replacement: "snake people's"
  },
  {
    regex: /\bmillennial\b/gi,
    replacement: 'snake person'
  },
  {
    regex: /\bmillennials\b/gi,
    replacement: 'snake people'
  },
  // common misspelling
  {
    regex: /\bmillienials\b/gi,
    replacement: 'snake people'
  },

  // the great recession
  {
    regex: /([\W-])(great )?recession\b/gi,
    replacement: '$1time of shedding and cold rocks'
  },

  // the great depression
  {
    regex: /\b(?:great )depression\b/gi,
    replacement: 'clutch plague'
  },

  // occupy wall street
  {
    regex: /\boccupy wall street\b/gi,
    replacement: 'great ape-snake war'
  },
  {
    regex: /\boccupy movement\b/gi,
    replacement: 'great ape-snake war'
  },
  {
    regex: /\bows movement\b/gi,
    replacement: 'great ape-snake war'
  },
  {
    regex: /\b ows \b/gi,
    replacement: 'great ape-snake war'
  },

  // helicopter parents
  {
    regex: /\bhelicopter(?: parent)?(\'+s)?\b/gi,
    replacement: 'thulsa doom$1'
  },

  // // helium parents
  {
    regex: /\b(?:helium|(?:free(?:-| )range))(?: parent)?(\'+s)?\b/gi,
    replacement: 'thoth-amon$1'
  },

  // trophy kids
  {
    regex: /\btrophy kids\b/gi,
    replacement: "quetzalcoatl's chosen"
  },
  {
    regex: /\btrophy kids\'\b/gi,
    replacement: "quetzalcoatl's chosen's"
  },

  // digital natives
  {
    regex: /\bdigital native\b/gi,
    replacement: 'parseltongue'
  },
  {
    regex: /\bdigital natives\b/gi,
    replacement: 'parseltongues'
  },

  // generation y
  {
    regex: /\bgeneration y\b/gi,
    replacement: 'serpent society'
  },
  {
    regex: /\bgen y\b/gi,
    replacement: 'society of the serpent'
  },
  {
    regex: /\bgeny\b/gi,
    replacement: 'serpent society'
  },
  {
    regex: /\bgeneration why\b/gi,
    replacement: 'serpent society'
  },

  // millennial generation
  {
    regex: /\bmillennial generation\b/gi,
    replacement: 'plissken faction'
  },
  {
    regex: /\bgeneration millennial\b/gi,
    replacement: 'plissken faction'
  },

  // millennialism
  {
    regex: /\bMillennialism\b/g,
    replacement: 'Reptilianism'
  },
  {
    regex: /\bmillennialism\b/g,
    replacement: 'reptilianism'
  },

  //  Gendered Millennials
  {
    regex: /\bMillennial (M|m)(e|a)n('s)?\b/g,
    replacement: 'Snake $1$2n$3'
  },
  {
    regex: /\bmillennial m(e|a)n('s)?\b/g,
    replacement: 'snake m$1n$2'
  },
  {
    regex: /\bMillennial (B|b)oy('s|s(?:')?)?\b/g,
    replacement: 'Snake $1oy$2'
  },
  {
    regex: /\bmillennial boy('s|s(?:')?)?\b/g,
    replacement: 'snake boy$1'
  },
  {
    regex: /\bMillennial (G|g)uy('s|s(?:')?)?\b/g,
    replacement: 'Snake $1uy$2'
  },
  {
    regex: /\bmillennial guy('s|s(?:')?)?\b/g,
    replacement: 'snake guy$1'
  },
  {
    regex: /\bMillennial (W|w)om(e|a)n('s)?\b/g,
    replacement: 'Snake $1om$2n$3'
  },
  {
    regex: /\bmillennial wom(e|a)n('s)?\b/g,
    replacement: 'snake wom$1n$2'
  },
  {
    regex: /\bMillennial (G|g)irl('s|s(?:')?)?\b/g,
    replacement: 'Snake $1irl$2'
  },
  {
    regex: /\bmillennial girl('s|s(?:')?)?\b/g,
    replacement: 'snake girl$1'
  },
  {
    regex: /\bMillennial (G|g)al('s|s(?:')?)?\b/g,
    replacement: 'Snake $1al$2'
  },
  {
    regex: /\bmillennial gal('s|s(?:')?)?\b/g,
    replacement: 'snake gal$1'
  },

  //  Aged Millennials
  {
    regex: /\bMillennial Child('s)?\b/g,
    replacement: 'Snakelet$1'
  },
  {
    regex: /\b[Mm]illennial child('s)?\b/g,
    replacement: 'snakelet$1'
  },
  {
    regex: /\bMillennial Children(?:(')s)?\b/g,
    replacement: 'Snakelets$1'
  },
  {
    regex: /\b[Mm]illennial children(?:(')s)?\b/g,
    replacement: 'snakelets$1'
  },
  {
    regex: /\bMillennial [Tt]een(?:ager)?('s)?\b/g,
    replacement: 'proto-Snake Person$1'
  },
  {
    regex: /\bmillennial teen(?:ager)?('s)?\b/g,
    replacement: 'proto-snake person$1'
  },
  {
    regex: /\bMillennial [Tt]een(?:ager)?(?:(s)\b(')|s\b)/g,
    replacement: 'proto-Snake People$2$1'
  },
  {
    regex: /\bmillennial teen(?:ager)?(?:(s)\b(')|s\b)/g,
    replace: 'proto-snake people$2$1'
  },
  {
    regex: /\bMillennial (A|a)dult('s)?\b/g,
    replacement: '$1dult Snake Person$2'
  },
  {
    regex: /\bmillennial adult('s)?\b/g,
    replacement: 'adult snake person$1'
  },
  {
    regex: /\bMillennial (A|a)dult(?:(s)\b(')|s\b)/g,
    replacement: '$1dult Snake People$3$2'
  },
  {
    regex: /\bmillennial adult(?:(s)\b(')|s\b)/g,
    replacement: 'adult snake people$2$1'
  },

  // generation we
  {
    regex: /\bgeneration we\b/gi,
    replacement: 'caduceus cult'
  },
  {
    regex: /\bwe generation\b/gi,
    replacement: 'cult of the caduceus '
  },

  // generation me/Z
  {
    regex: /\bgeneration (me|z)\b/gi,
    replacement: 'the cult of the serpent'
  },

  // global generation
  {
    regex: /\bglobal generation\b/gi,
    replacement: "tannin's horde"
  },
  {
    regex: /\bgeneration global\b/gi,
    replacement: 'horde of tannin'
  },

  // generation next
  {
    regex: /\bgeneration next\b/gi,
    replacement: 'time of nidhogg'
  },

  // net generation
  {
    regex: /\bnet generation\b/gi,
    replacement: "damballa's coils"
  },
  {
    regex: /\bgeneration net\b/gi,
    replacement: 'coils of damballa'
  },

  // echo boomers
  {
    regex: /\becho boomers\b/gi,
    replacement: 'crotalids'
  },
  {
    regex: /\becho boomer\b/gi,
    replacement: 'crotalid'
  },

  // new boomers
  {
    regex: /\bnew boomers\b/gi,
    replacement: "jörmungandr's circle"
  },
  {
    regex: /\bnew boomers'\b/gi,
    replacement: "jörmungandr's circle's"
  },

  // generation flux
  {
    regex: /\bgeneration flux\b/gi,
    replacement: 'hiss club'
  },
  {
    regex: /\bflux generation\b/gi,
    replacement: 'hiss club'
  },

  // generation sell
  {
    regex: /\bgeneration sell\b/gi,
    replacement: 'kaa tribe'
  },
  {
    regex: /\bsell generation\b/gi,
    replacement: 'tribe of kaa'
  },

  // boomerang generation
  {
    regex: /\bboomerang generation\b/gi,
    replacement: 'ouroboros society'
  },
  {
    regex: /\bgeneration boomerang\b/gi,
    replacement: 'ouroboros society'
  },

  // peter pan generation
  {
    regex: /\bpeter pan generation\b/gi,
    replacement: 'neheb-kau cult'
  },
  {
    regex: /\bpeter pan generation\b/gi,
    replacement: 'neheb-kau cult'
  },
  {
    regex: /\bgeneration peter pan\b/gi,
    replacement: 'neheb-kau cult'
  },

  // generation 911
  {
    regex: /\bgeneration 9\/11\b/gi,
    replacement: 'kaa tribe'
  },
  {
    regex: /\bgeneration 9\/11\b/gi,
    replacement: 'kaa tribe'
  },
  {
    regex: /\b9\/11 generation\b/gi,
    replacement: 'tribe of the kaa'
  },
  {
    regex: /\bgen 9\/11\b/gi,
    replacement: 'kaa tribe'
  },
  {
    regex: /\bgen 911\b/gi,
    replacement: 'kaa tribe'
  },

  // the generation of €700
  {
    regex: /\bthe generation of €700\b/gi,
    replacement: 'ophion'
  },
  {
    regex: /\b€700 generation\b/gi,
    replacement: 'ophion'
  },

  // mileurista
  {
    regex: /\bmileurista\b/gi,
    replacement: 'nagual'
  },
  {
    regex: /\bmilleurista\b/gi,
    replacement: 'nagual'
  },

  // precarious generation
  {
    regex: /\bprecarious generation\b/gi,
    replacement: 'gargouille'
  },
  {
    regex: /\bgeneration precarious\b/gi,
    replacement: 'gargouille'
  },

  // Young Americans
  {
    regex: /\bYoung American/gi,
    replacement: 'ophidian moultling'
  },

  // Bonus
  {
    regex: /(?:U\.?S\.?|China|Iran|American) drones/gi,
    replacement: 'bees'
  },
  {
    regex: /drone(-use)?/gi,
    replacement: 'bee'
  }
];
