var server = require('express');
var app = server();
var moment = require('moment');
var fs = require('fs');
var path = require('path');

var port = process.env.PORT || 3500;

app.listen(port, function(){
  console.log("Listening on port: " + port);
});

app.get('/', function(req, res) {
     var data_os = req.headers['user-agent'];
     var data_ip = req.headers['x-forwarded-for'];
     var data_lang = req.headers['accept-language'];
    var os = 'OS = ';
    var ip = 'IP = ';
    var lang = 'Language = '
      res.send(os + data_os + '<br>'+  ip + data_ip + '<br>' + lang + data_lang);
      
      console.log(req.headers);

});