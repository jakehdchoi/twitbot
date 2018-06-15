var http = require('http');
var twit = require('twit');
var config = require('./config.js');
// var fs = require('fs');

var Twitter = new twit(config);

var userList = [
    'jakehdchoi',
    'rogerkver',
    'VitalikButerin'
]

const before = Date.now();

for (var i = 0; i < userList.length; i++) {
    Twitter.get('statuses/user_timeline', {
        screen_name: userList[i],
        count: 20,
        tweet_mode: 'extended'
    }, function(err, data) {
        // console.log(data);
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
