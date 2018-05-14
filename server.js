var http = require('http');
var port = 8080;
var host = 'localhost';

var server = http.createServer(function(req, res) {
  var userInfo = {};  
  //get user information
  userInfo.ipaddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  //get first entry before comman in accept-language header
  //this is supposed to be the language setting
  userInfo.language  = req.headers['accept-language'].split(',')[0];

  //find first entry in parameters in user-agent string and strip parentheses
  //this is supposed to be the operating system
  userInfo.software  = req.headers['user-agent'].match(/\([^\(\)]*\)/g)[0].replace(/[\(\)]/g, '');
  
  //send json response
  res.writeHead(200, { 'Content-Type' : 'text/plain' });
  res.end(JSON.stringify(userInfo));

});

server.listen(port, host);

console.log('Server listening on port ' + port);
