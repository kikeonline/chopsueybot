console.log('The Chop Suey RT bot is starting...');

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);
var wakeupSearch = { q: "wake up make up shake up system of a down", count: 1, result_type: "recent" };

// This function finds the latest tweet with the wakeupSearch variable, and retweets it.
function retweetLatest() {
    T.get('search/tweets', wakeupSearch, function(error, data) {
        var tweets = data.statuses;
        for (var i = 0; i < tweets.length; i++) {
            console.log(tweets[i].text);
        }
        // If our search request to the server had no errors...
        if (!error) {
            // ...then we grab the ID of the tweet we want to retweet...
            var retweetId = data.statuses[0].id_str;
            // ...and then we tell Twitter we want to retweet it!
            T.post('statuses/retweet/' + retweetId, {}, tweeted)
        }
        // However, if our original search request had an error, we want to print it out here.
        else {
            if (debug) {
                console.log('There was an error with the search:', error);
            }
        }
    });
}

function tweeted(err, data, response) {
  if (err) {
  	console.log("Something went wrong! Probably allready retweeted!");
  } else {
    console.log("Success!");
  }
}

retweetLatest();