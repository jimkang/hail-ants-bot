module.exports = [
  // AngularJS
  {
    regex: /#angularjs/gi,
    replacement: '#needlesscomplexity'
  },
  {
    regex: /\bAngular\.?(?:JS)? 2/gi,
    replacement: 'A Rube Goldberg machine for web pages'
  },
  {
    regex: /\bAngular\.?(?:JS)?/gi,
    replacement: 'needless complexity'
  },
  {
    regex: /\dependency injection/gi,
    replacement: "magic that's just going to upset you later"
  },

  // ReactJS
  {
    regex: /#reactjs/gi,
    replacement: '#newthingyoulladoptoutoffear'
  },
  {
    regex: /\ReactJS/gi,
    replacement: 'the latest spin of the hamster wheel'
  },
  {
    regex: /\React\.?(?:JS)?/gi,
    replacement: "the new thing you'll adopt out of fear"
  },

  // Hadoop
  {
    regex: /\bHadoop/gi,
    replacement: 'needless complexity'
  },

  // MVC
  {
    regex: /\b(MVC)|(model view controller)/gi,
    replacement: 'the one mold we shove everything into'
  },
  {
    regex: /\bmodel/gi,
    replacement: 'miscellaneous code bucket'
  },
  {
    regex: /\bcontroller/gi,
    replacement: 'the part we will make too large then feel bad about'
  }
];
