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
  }
  
];
