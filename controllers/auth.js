const jwt = require('jsonwebtoken');
const sec ='secret';

function SetUserBySessionId(user){

    var token = jwt.sign({user}, sec);
    return token;
}

function GetUserBySessionId(token){
    var u =null;
 jwt.verify(token,sec,(err,dec)=>{
  
     
     u=  dec?.user;
})

return u;
}


module.exports = {
    SetUserBySessionId,
    GetUserBySessionId,
}