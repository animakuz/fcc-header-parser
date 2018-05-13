var http = require('http');
var port = 8080;
var host = 'localhost';

var server = http.createServer(function(req, res) {
  var userInfo = {};  

  //get user information
  userInfo.ipAddress = 0;
  userInfo.lang = '';
  userInfo.os = '';  

  //send json response
  res.writeHead(200, { 'Content-Type' : 'text/plain' });
  res.end(JSON.stringify(userInfo));

});

server.listen(port, host);

console.log('Server listening on port ' + port);
