var http = require('http');
var twit = require('twit');
var config = require('./config.js');
var fs = require('fs');
var qs = require('querystring');

var Twitter = new twit(config);

var userList = [
    'jakehdchoi',
    'rogerkver',
    'VitalikButerin'
]

var numberOfTwits = 3;

const before = Date.now();

for (var i = 0; i < userList.length; i++) {
    Twitter.get('statuses/user_timeline', {
        screen_name: userList[i],
        count: numberOfTwits,
        tweet_mode: 'extended'
    }, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            for (var j = 0; j < data.length; j++) {
                console.log(data[j].created_at);
                console.log(data[j].user.screen_name);
                console.log(data[j].full_text);
                console.log('https://twitter.com/i/web/status/' + data[j].id_str);
                console.log((Date.now() - before) / 1000);
                console.log('');
            }
            // console.log(data);
            var stringData = JSON.stringify(data);
            var title = 'example';
            fs.appendFile(`database/${title}.json`, stringData, 'utf8', function(err){
                if (err) {
                    console.log("An error occured while writing JSON Object to File.");
                    return console.log(err);
                }
                // console.log("JSON file has been saved.");
            });
        }
    })
}



// var app = http.createServer(function(request,response){
//     var url = request.url;
//     if(request.url == '/'){
//       url = '/index.html';
//     }
//     response.writeHead(200);
//     response.end('Hello');
// });
// app.listen(3000);
