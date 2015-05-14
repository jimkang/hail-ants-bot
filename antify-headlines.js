var callNextTick = require('call-next-tick');
var antifyHeadline = require('./antify-headline');

function antifyHeadlines(headlines, done) {
  callNextTick(done, null, headlines.map(antifyHeadline));
}

module.exports = antifyHeadlines;
