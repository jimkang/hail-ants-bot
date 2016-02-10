module.exports = [
  // AngularJS
  {
    regex: /#angularjs/ig,
    replacement: "#needlesscomplexity"
  },
  {
    regex: /\bAngular\.?(?:JS)? 2/ig,
    replacement: "A Rube Goldberg machine for web pages"
  },
  {
    regex: /\bAngular\.?(?:JS)?/ig,
    replacement: "needless complexity"
  },
  {
    regex: /\dependency injection/ig,
    replacement: "magic that's just going to upset you later"
  },

  // ReactJS
  {
    regex: /#reactjs/ig,
    replacement: "#newthingyoulladoptoutoffear"
  },  
  {
    regex: /\ReactJS/ig,
    replacement: "the latest spin of the hamster wheel"
  },
  {
    regex: /\React\.?(?:JS)?/ig,
    replacement: "the new thing you'll adopt out of fear"
  },

  // Hadoop
  {
    regex: /\bHadoop/ig,
    replacement: 'needless complexity'
  },

  // MVC
  {
    regex: /\b(MVC)|(model view controller)/ig,
    replacement: 'the one mold we shove everything into'
  },
  {
    regex: /\bmodel/ig,
    replacement: 'miscellaneous code bucket'
  },
  {
    regex: /\bcontroller/ig,
    replacement: 'the part we will make too large then feel bad about'
  }
];
