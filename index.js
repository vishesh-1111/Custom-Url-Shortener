const express = require('express');
const path  =  require('path')
const validurl =require('valid-url');
const {GetAllUrlData,CreateShortUrl,FindByShortid, GetUrlByShortId}=require('./controllers/user.js');
const {ConnectMongoose}=require('./connection/conn.js');
const { urlencoded } = require('body-parser');
const app = express();
const port =3000;
const dburl='mongodb://127.0.0.1:27017/db1';
const {isValidHttpUrl} = require('./controllers/urlcheck.js');
ConnectMongoose(dburl);
app.use(express.json());
app.use(express.urlencoded({extended:false})); 




app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.get('/',async(req,res)=>{
   const alldata= await GetAllUrlData()
   res.render('home',{alldata});
     
})
.post('/',async(req,res)=>{
      console.log(req.body);
      var userurl = req.body.url;
      var is_valid=isValidHttpUrl(userurl);
      console.log(userurl); 
      
      if(is_valid){
            const id = await CreateShortUrl(userurl);           
             const alldata= await GetAllUrlData()
             return res.render('home',{alldata});
             
   
      }
      else{
           
            return res.status(400).json({mssg:"invalid"});
      }
})

.get('/:id',async(req,res)=>{
      const id =req.params.id;
      await GetUrlByShortId(id).then((redirecturl)=>{
            console.log(redirecturl);
            res.statusCode=200;
            res.redirect(redirecturl);
      })
      .catch((err)=>{
            console.log(err);
            res.status(403);
      })
      
      });



 
app.listen(port,()=>{
      console.log(`port running at ${port}`);  
})










