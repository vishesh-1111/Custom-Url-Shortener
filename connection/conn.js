const mongoose = require('mongoose');

async function ConnectMongoose(url){
    await mongoose.connect(url)
    .catch((err)=>console.log(err))
    .then((res)=>  console.log('Database Connected.'))
 
}

module.exports ={
    ConnectMongoose ,
}