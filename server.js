const express=require('express');
const exphb= require('express-handlebars');
a=express();
a.engine('handlebars',exphb({defaultLayout:'mainp'}));
a.set('view engine','handlebars');
a.use(express.static('views/static'));
a.use(express.urlencoded());
a.post('/',(req,res)=>{
  var name=req.body.uname;
  var pwd=req.body.passwrd;
//   var email=req.body.email;
if(name=="admin" && pwd=="1234")
    res.send('login success');
else
  res.send(name+ "is not yet a registered member" );
  
}).listen(process.env.PORT || 3000);
