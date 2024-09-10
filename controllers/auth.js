
const mp = new Map();
 

function SetUserBySessionId(id,user){
    mp.set(id,user);
   }

function GetUserBySessionId(id){
 const user = mp.get(id);
 return user;
}


module.exports = {
    SetUserBySessionId,
    GetUserBySessionId,
}