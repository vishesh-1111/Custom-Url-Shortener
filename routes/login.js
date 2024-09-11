const express =require('express');
const router =express.Router();

const {GetUser} =require('../controllers/user');
const {SetUserBySessionId} =require('../controllers/auth');
router
.route('/')
.get(async(req,res)=>{
    return res.render('login');
})
.post(async (req,res) => {

  const user =await GetUser(req,res);
   if(!user){
    return res.render('login'); 
   } 

   const tok=await SetUserBySessionId(user);
   res.cookie("s_id",tok);
   return res.redirect('/');

});


module.exports = router;
