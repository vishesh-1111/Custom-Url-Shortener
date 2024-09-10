const express = require('express');
const path  =  require('path')
const {ConnectMongoose}=require('./connection/conn.js');
const { urlencoded } = require('body-parser');
const app = express();
const port =3000;
const dburl='mongodb://127.0.0.1:27017/db4';
const homerouter = require('./routes/home.js');
const urlrouter = require('./routes/url.js');
const signuprouter = require('./routes/signup.js');
const loginrouter =  require('./routes/login.js')
const cookieParser = require('cookie-parser');
const {RestrictToLog,CheckAuth} = require('./middlewares/auth.js');

ConnectMongoose(dburl);
app.use(express.json());
app.use(express.urlencoded({extended:false})); 
app.use(cookieParser());


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use('/url',RestrictToLog,urlrouter);
app.use('/signup',signuprouter);
app.use('/login',loginrouter);
app.use('/',CheckAuth,homerouter);








 
app.listen(port,()=>{
      console.log(`port running at ${port}`);  
})










