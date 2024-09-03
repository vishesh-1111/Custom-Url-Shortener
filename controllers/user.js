const urlcollection = require('../models/user.js');
const ShortUniqueId = require('short-unique-id');
const uid = new ShortUniqueId({ length: 5 });

  async function GetAllUrlData() {
      return  await urlcollection.find()
  
    }
    async function CreateShortUrl(userurl) {
        const short_id = uid.rnd();
          
        await urlcollection.create({
          url : userurl,
          key : short_id,
        })

      return short_id;
     }
    

     async function GetUrlByShortId(id) {
      
      const short_id = id;
    return  await urlcollection.findOne(
        {key:id},
        {url:1,_id:0}
      ).then((res)=>{
        return res.url;
      })
      .catch((err)=>{
        console.log(err);
      }) 
   }

module.exports = {
    GetAllUrlData,
    CreateShortUrl,
    GetUrlByShortId,
}

