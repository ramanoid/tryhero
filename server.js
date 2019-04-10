const express=require('express');
const exphb= require('express-handlebars');
a=express();
a.engine('handlebars',exphb({defaultLayout:'mainp'}));
a.set('view engine','handlebars');
a.use(express.static('views/static'));
a.use(express.urlencoded());
a.post('/register',(req,res)=>{
  var name=req.body.uname;
  var pwd=req.body.passwrd;
  var monumiii=req.body.mobinume;
  var anumi=req.body.anume;
  res.send("thanks for regging"+name+pwd)

//   var email=req.body.email;
//   if(name=="admin" && pwd=="1234")
//     res.send('login success');
//   else
//   res.send(name+ "is not yet a registered member" );
  
// });
// a.get('/',(req,res)=>{
//   res.render('index');
  //res.end();
});
a.get('/about',(req,res)=>{
  res.render('about');
})
a.get('/home',(req,res)=>{
  res.render('home');
})
a.get('/index',(req,res)=>{
  res.render('indexo');
})
 .listen(process.env.PORT || 3000);
