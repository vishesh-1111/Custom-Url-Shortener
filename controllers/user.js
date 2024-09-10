const model =require('../models/user');


 async function GetUser(req,res){
    const {uemail,upassword}= req.body;
    
  return  model.findOne({ email: uemail }, { password: upassword })
}


async function CreateUser(req,res){
    const {uname,uemail,upassword}=req.body;

    model.create({
       name : uname,
       email : uemail,
       password: upassword  
    }).then((user)=>{
        console.log(user);
        return user;
    }).catch((error)=>{
        console.log(error);
        return null;
    })
}


module.exports = {
    GetUser,
    CreateUser,
}