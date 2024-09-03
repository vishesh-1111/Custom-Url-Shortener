const mongoose = require('mongoose');

const userschema=new mongoose.Schema({
  url : {
    type :String,
    require:true,
  },
  key : {
     type :String,
     require:true
  },
  
    visited_history : {
      type : Array,
    }
  },
  {timestamps:true}   
  );

                                        
const url_ =  mongoose.model('short_url',userschema);
module.exports = url_; 