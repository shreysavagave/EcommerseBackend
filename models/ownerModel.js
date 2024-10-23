const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
  fullname :String,
  email:String,
  password:String,
  products:{
    type:Array,
    default : []
  },
  picture: String,
  ownerGSTIN :String,
})

module.exports = mongoose.model("admin",ownerSchema);