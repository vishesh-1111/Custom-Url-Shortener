const mongoose = require('mongoose');

const urlschema=new mongoose.Schema({
  url : {
    type :String,
    require:true,
  },
  key : {
     type :String,
     require:true
  },

   createdBy:{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'usercollections'
   },  

    visited_history : {
      type : Array,
    }
  },
  {timestamps:true}   
  );

                                        
const url_ =  mongoose.model('short_url',urlschema);
module.exports = url_; 