const express =require('express');
const router =express.Router();
const {GetAllUrlData,CreateShortUrl,
FindByShortid, GetUrlByShortId}=require('../controllers/url.js');
const validurl =require('valid-url');
const {isValidHttpUrl} = require('../controllers/urlcheck.js');

router
.route('/:id')
.get(async(req,res)=>{
    const id =req.params.id;
    await GetUrlByShortId(id).then((redirecturl)=>{
          res.statusCode=200;
          res.redirect(redirecturl);
    })
    .catch((err)=>{
          console.log(err);
          res.status(403);
    })
    
    });

 router.route('/')  
.post(async(req,res)=>{
    console.log(req.body);
    var userurl = req.body.url;
    var is_valid=isValidHttpUrl(userurl);
    
    if(is_valid){
            const id = await CreateShortUrl(req,res);           
            const alluserurl= await GetAllUrlData(req,res)
            return res.render('home',{alluserurl});
    }
    else{
        return res.status(400).json({mssg:"invalid"});
    }
})    

module.exports= router;