const express =require('express');
const {CreateUser}=require('../controllers/user')
const router =express.Router();

const model =require('../models/user')


router
.route('/')
.get(async(req,res)=>{
    return res.render('signup');
})
.post(async(req,res)=>{
  await CreateUser(req,res).then((user)=>{
    return res.redirect('/login');
  })
});

module.exports = router;