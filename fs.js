var _ = require('lodash');
var a= ['suku',23,25,'25'];
var http=require('http');
var k = _.uniq(a);
//http.createServer(function (req, res) {
    //res.writeHead(200, {'Content-Type': 'text/html'});
    //res.write("the summ of the given numbers are \n" + k);
   // res.write("the diff of the given numbers are \n" + ad.sbn(x,y));
   // res.write("the quotient of the given numbers are \n" + ad.dvn(x,y));
   // res.write("the product of the given numbers are \n" + ad.mln(x,y));
   // res.write("The date and time are currently: " + dt.myDateTime());
   // res.end();
  //}).listen(6531);
http.createServer( function (req,res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('teh uniq value in array');
    res.write(k);
    res.end();
}).listen(8147);
