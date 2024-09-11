const express =require('express');
const router =express.Router();
const {GetAllUrlData,CreateShortUrl,
    FindByShortid, GetUrlByShortId}=require('../controllers/url.js');
const {GetUserBySessionId}  = require('../controllers/auth.js')

router
.route('/')
.get(async(req,res)=>{
    const authid =req.cookies.s_id
    if(!authid){
        console.log('loginfirst');
        return res.redirect('/login');
    }

    const user = GetUserBySessionId(authid);

     
    const alldata= await GetAllUrlData(req,res);
    res.render('home',{alldata});
})


module.exports = router;





