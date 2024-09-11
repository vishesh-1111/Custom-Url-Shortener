const urlcollection = require('../models/url.js');
const ShortUniqueId = require('short-unique-id');
const uid = new ShortUniqueId({ length: 5 });

  async function GetAllUrlData(req,res) {
   if(req.user==null)return []; 
      return  await urlcollection.find({createdBy:req?.user._id}); 
  
    }
    async function CreateShortUrl(req,res) {
        const short_id = uid.rnd();
        const userurl = req.body.url;
          
        await urlcollection.create({
          url : userurl,
          key : short_id,
          createdBy : req.user._id,
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

