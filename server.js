
var http  = require('http'),
    fs    = require('fs');

http.createServer(function (req, res) {

  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Acces-Control-Allow-Origin' : '*'

  });

  var readStream =fs.createReadStream(__dirname + '/index.html');

  readStream.pipe(res);

}).listen(3000);

console.log('Visit me at http://localhost:3000');