const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require('../models/userModel')

router.get('/',function(req,res){
  res.render("createUser");
})

router.post("/createUser", async function(req,res){
  try{
    let {email , username , password, fullname} = req.body;


    if(fullname == null || fullname == "" || username == null || username == "" || email ==null || email == "" || password == null || password == "" ) return res.status(400).send("Invalid Credentials");

    let user = await userModel.findOne({email});
    if(user) return res.status(500).send("User already exists");
  
    bcrypt.genSalt(10,(err,salt)=>{
      bcrypt.hash(password,salt,async (err,hash)=>{
        let user = await userModel.create({
        username,
        fullname,
        email,
        password:hash
        });
  
        let token = jwt.sign({email:email , userid:user._id},"protectedString");
        res.cookie("token",token);
        res.render("login");
      })
    });

    res.send(user);
  }
  catch(err){
    console.log(err.message)
    res.send(err);
  }

})
module.exports = router;