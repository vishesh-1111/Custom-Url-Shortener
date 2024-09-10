const express =require('express');
const router =express.Router();
const {GetUser} =require('../controllers/user');
const {SetUserBySessionId} =require('../controllers/auth');
const { v4: uuidv4 } = require('uuid');

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
   const session_id = uuidv4();
   res.cookie("s_id",session_id);
   SetUserBySessionId(session_id,user);
   return res.redirect('/');

});


module.exports = router;
