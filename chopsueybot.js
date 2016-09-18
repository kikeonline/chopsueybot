console.log('The Chop Suey bot is starting...');

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

function randLyrics() {
    var text = "";
    var possible = "GrababrushandputaHidethescarstofadeawaytheshakeup";
    for( var i=0; i < 20; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

var tweet = {
  status: 'Wake Up! ' + randLyrics() + 'little make-up! ' + randLyrics() + ' shake-up! ' + randLyrics() + 'uponthe table!.'
}
console.log('Tweeting: ' + tweet.status);
T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response) {
  if (err) {
  	console.log("Something went wwrong!");
  } else {
    console.log("Success!");
  }
}