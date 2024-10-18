const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/ecommerse")
.then(function(){
  console.log("connected");
})
.catch(function(){
  console.log("not connected")
})

module.exports = mongoose.connection;
