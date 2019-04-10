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
  res.send(JSON.stringify({status:"success"}) );
  res.send(JSON.stringify({status:'fail'}))
  
});
a.get('/',(req,res)=>{
  res.render('index');
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
//a.get('/home',(req,res)=>{
  // res.write("this is the home");
   //res.end();
//});
//a.get('/about',(req,res)=>{
 //   res.send('[{"name":"raghv","age":21},{"name":"sunitha","age":12}] ');
   // res.send("we are us \n\n\n\n this is us");
    //res.end();
//})

