var a; 
const express= require('express');
const exphb= require('express-handlebars');
a=express();
a.engine('handlebars',exphb({defaultLayout:'mainp'}));
a.set('view engine','handlebars');
a.use(express.static('views/static'));
a.use(express.urlencoded());
a.post('/getdata',(req,res)=>{
  var name=req.body.uname;
  var mobile=req.body.mob;
  var email=req.body.email;
  res.send(name+"<br>"+mobile + "&nbsp" );
  
});
a.get('/',(req,res)=>{
  res.render('alo');
  //res.end();
});
a.get('/about',(req,res)=>{
  res.render('about1');
})
a.get('/home',(req,res)=>{
  res.render('alo1');
  a.get('/login',(req,res)=>{
      var uname = req.body.usname;
      var pwd = req.body.pwrd;
      console.log("dfgh");
  })
})
// a.get('/index',(req,res)=>{
//   res.render('indexo');
//})
 .listen(3000,()=>{
     console.log('all fine dude');
 });