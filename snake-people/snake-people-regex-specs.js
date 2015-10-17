module.exports = [
  // millennial
  {
    regex: /\bmillennials\'/ig,
    replacement: "snake people's"
  },
  {
    regex: /\bmillennial\b/ig,
    replacement: "snake person"
  },
  {
    regex: /\bmillennials\b/ig,
    replacement: "snake people"
  },
  // common misspelling
  {
    regex: /\bmillienials\b/ig,
    replacement: "snake people"
  },

  // the great recession 
  {
    regex: /([\W-])(great )?recession\b/ig,
    replacement: "$1time of shedding and cold rocks"
  },

  // the great depression
  {
    regex: /\b(?:great )depression\b/ig,
    replacement: "clutch plague"
  },

  // occupy wall street
  {
    regex: /\boccupy wall street\b/ig,
    replacement: "great ape-snake war"
  },
  {
    regex: /\boccupy movement\b/ig,
    replacement: "great ape-snake war"
  },
  {
    regex: /\bows movement\b/ig,
    replacement: "great ape-snake war"
  },
  {
    regex: /\b ows \b/ig,
    replacement: "great ape-snake war"
  },

  // helicopter parents
  {
    regex: /\bhelicopter(?: parent)?(\'+s)?\b/ig,
    replacement: "thulsa doom$1"
  },

  // // helium parents
  {
    regex: /\b(?:helium|(?:free(?:-| )range))(?: parent)?(\'+s)?\b/ig,
    replacement: "thoth-amon$1"
  },
  
  // trophy kids
  {
    regex: /\btrophy kids\b/ig,
    replacement: "quetzalcoatl's chosen"
  },
  {
    regex: /\btrophy kids\'\b/ig,
    replacement: "quetzalcoatl's chosen's"
  },

  // digital natives
  {
    regex: /\bdigital native\b/ig,
    replacement: "parseltongue"
  },
  {
    regex: /\bdigital natives\b/ig,
    replacement: "parseltongues"
  },

  // generation y
  {
    regex: /\bgeneration y\b/ig,
    replacement: "serpent society"
  },
  {
    regex: /\bgen y\b/ig,
    replacement: "society of the serpent"
  },
  {
    regex: /\bgeny\b/ig,
    replacement: "serpent society"
  },
  {
    regex: /\bgeneration why\b/ig,
    replacement: "serpent society"
  },

  // millennial generation
  {
    regex: /\bmillennial generation\b/ig,
    replacement: "plissken faction"
  },
  {
    regex: /\bgeneration millennial\b/ig,
    replacement: "plissken faction"
  },

  // millennialism
  {
    regex: /\bMillennialism\b/g,
    replacement: "Reptilianism"
  },
  {
    regex: /\bmillennialism\b/g,
    replacement: "reptilianism"
  },

  //  Gendered Millennials
  {
    regex: /\bMillennial (M|m)(e|a)n('s)?\b/g,
    replacement: "Snake $1$2n$3"
  },
  {
    regex: /\bmillennial m(e|a)n('s)?\b/g,
    replacement: "snake m$1n$2"
  },
  {
    regex: /\bMillennial (B|b)oy('s|s(?:')?)?\b/g,
    replacement: "Snake $1oy$2"
  },
  {
    regex: /\bmillennial boy('s|s(?:')?)?\b/g,
    replacement: "snake boy$1"
  },
  {
    regex: /\bMillennial (G|g)uy('s|s(?:')?)?\b/g,
    replacement: "Snake $1uy$2"
  },
  {
    regex: /\bmillennial guy('s|s(?:')?)?\b/g,
    replacement: "snake guy$1"
  },
  {
    regex: /\bMillennial (W|w)om(e|a)n('s)?\b/g,
    replacement: "Snake $1om$2n$3"
  },
  {
    regex: /\bmillennial wom(e|a)n('s)?\b/g,
    replacement: "snake wom$1n$2"
  },
  {
    regex: /\bMillennial (G|g)irl('s|s(?:')?)?\b/g,
    replacement: "Snake $1irl$2"
  },
  {
    regex: /\bmillennial girl('s|s(?:')?)?\b/g,
    replacement: "snake girl$1"
  },
  {
    regex: /\bMillennial (G|g)al('s|s(?:')?)?\b/g,
    replacement: "Snake $1al$2"
  },
  {
    regex: /\bmillennial gal('s|s(?:')?)?\b/g,
    replacement: "snake gal$1"
  },

  //  Aged Millennials
  {
    regex: /\bMillennial Child('s)?\b/g,
    replacement: "Snakelet$1"
  },
  {
    regex: /\b[Mm]illennial child('s)?\b/g,
    replacement: "snakelet$1"
  },
  {
    regex: /\bMillennial Children(?:(')s)?\b/g,
    replacement: "Snakelets$1"
  },
  {
    regex: /\b[Mm]illennial children(?:(')s)?\b/g,
    replacement: "snakelets$1"
  },
  {
    regex: /\bMillennial [Tt]een(?:ager)?('s)?\b/g,
    replacement: "proto-Snake Person$1"
  },
  {
    regex: /\bmillennial teen(?:ager)?('s)?\b/g,
    replacement: "proto-snake person$1"
  },
  {
    regex: /\bMillennial [Tt]een(?:ager)?(?:(s)\b(')|s\b)/g,
    replacement: "proto-Snake People$2$1"
  },
  {
    regex: /\bmillennial teen(?:ager)?(?:(s)\b(')|s\b)/g,
    replace: "proto-snake people$2$1"
  },
  {
    regex: /\bMillennial (A|a)dult('s)?\b/g,
    replacement: "$1dult Snake Person$2"
  },
  {
    regex: /\bmillennial adult('s)?\b/g,
    replacement: "adult snake person$1"
  },
  {
    regex: /\bMillennial (A|a)dult(?:(s)\b(')|s\b)/g,
    replacement: "$1dult Snake People$3$2"
  },
  {
    regex: /\bmillennial adult(?:(s)\b(')|s\b)/g,
    replacement: "adult snake people$2$1"
  },

  // generation we
  {
    regex: /\bgeneration we\b/ig,
    replacement: "caduceus cult"
  },
  {
    regex: /\bwe generation\b/ig,
    replacement: "cult of the caduceus "
  },

  // generation me/Z
  {
    regex: /\bgeneration (me|z)\b/ig,
    replacement: "the cult of the serpent"
  },

  // global generation
  {
    regex: /\bglobal generation\b/ig,
    replacement: "tannin's horde"
  },
  {
    regex: /\bgeneration global\b/ig,
    replacement: "horde of tannin"
  },

  // generation next
  {
    regex: /\bgeneration next\b/ig,
    replacement: "time of nidhogg"
  },

  // net generation
  {
    regex: /\bnet generation\b/ig,
    replacement: "damballa's coils"
  },
  {
    regex: /\bgeneration net\b/ig,
    replacement: "coils of damballa"
  },

  // echo boomers
  {
    regex: /\becho boomers\b/ig,
    replacement: "crotalids"
  },
  {
    regex: /\becho boomer\b/ig,
    replacement: "crotalid"
  },

  // new boomers
  {
    regex: /\bnew boomers\b/ig,
    replacement: "jörmungandr's circle"
  },
  {
    regex: /\bnew boomers'\b/ig,
    replacement: "jörmungandr's circle's"
  },

  // generation flux
  {
    regex: /\bgeneration flux\b/ig,
    replacement: "hiss club"
  },
  {
    regex: /\bflux generation\b/ig,
    replacement: "hiss club"
  },

  // generation sell
  {
    regex: /\bgeneration sell\b/ig,
    replacement: "kaa tribe"
  },
  {
    regex: /\bsell generation\b/ig,
    replacement: "tribe of kaa"
  },

  // boomerang generation
  {
    regex: /\bboomerang generation\b/ig,
    replacement: "ouroboros society"
  },
  {
    regex: /\bgeneration boomerang\b/ig,
    replacement: "ouroboros society"
  },

  // peter pan generation
  {
    regex: /\bpeter pan generation\b/ig,
    replacement: "neheb-kau cult"
  },
  {
    regex: /\bpeter pan generation\b/ig,
    replacement: "neheb-kau cult"
  },
  {
    regex: /\bgeneration peter pan\b/ig,
    replacement: "neheb-kau cult"
  },

  // generation 911
  {
    regex: /\bgeneration 9\/11\b/ig,
    replacement: "kaa tribe"
  },
  {
    regex: /\bgeneration 9\/11\b/ig,
    replacement: "kaa tribe"
  },
  {
    regex: /\b9\/11 generation\b/ig,
    replacement: "tribe of the kaa"
  },
  {
    regex: /\bgen 9\/11\b/ig,
    replacement: "kaa tribe"
  },
  {
    regex: /\bgen 911\b/ig,
    replacement: "kaa tribe"
  },

  // the generation of €700
  {
    regex: /\bthe generation of €700\b/ig,
    replacement: "ophion"
  },
  {
    regex: /\b€700 generation\b/ig,
    replacement: "ophion"
  },

  // mileurista
  {
    regex: /\bmileurista\b/ig,
    replacement: "nagual"
  },
  {
    regex: /\bmilleurista\b/ig,
    replacement: "nagual"
  },

  // precarious generation
  {
    regex: /\bprecarious generation\b/ig,
    replacement: "gargouille"
  },
  {
    regex: /\bgeneration precarious\b/ig,
    replacement: "gargouille"
  },

  // Young Americans
  {
    regex: /\bYoung American/ig,
    replacement: "ophidian moultling"
  },

  // Bonus
  {
    regex: /(?:U\.?S\.?|China|Iran|American) drones/ig,
    replacement: 'bees'
  },
  {
    regex: /drone(-use)?/ig,
    replacement: 'bee'
  }  

];
