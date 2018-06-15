var http = require('http');
var twit = require('twit');
var config = require('./config.js');
// var fs = require('fs');

var Twitter = new twit(config);

var userList = { screen_name: 'jakehdchoi', count: 3 };

Twitter.get('statuses/user_timeline', userList , function(err, data) {
    console.log(data);
    for (var i = 0; i < data.length ; i++) {
    console.log(data[i].text);
  }
})







// var app = http.createServer(function(request,response){
//     var url = request.url;
//     if(request.url == '/'){
//       url = '/index.html';
//     }
//     response.writeHead(200);
//     response.end('Hello');
// });
// app.listen(3000);
