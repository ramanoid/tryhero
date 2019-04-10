var http = require('http');
var dt = require('./mod');
const ad= require('./add');
var x=12;
var y=25;
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("the summ of the given numbers are \n" + ad.addn(x,y));
  res.write("the diff of the given numbers are \n" + ad.sbn(x,y));
  res.write("the quotient of the given numbers are \n" + ad.dvn(x,y));
  res.write("the product of the given numbers are \n" + ad.mln(x,y));
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(65331);