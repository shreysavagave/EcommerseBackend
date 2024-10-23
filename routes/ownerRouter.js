const express = require("express");
const router = express.Router();
const ownerModel = require('../models/ownerModel');


if(process.env.NODE_ENV ===  "developement"){
  router.get('/create',function(req,res){
    res.render("createOwner");
  });
  router.post('/create', async function(req,res){
    let owners = await ownerModel.find();
    if(owners.length >0){
      return res
      .send(503)
      .send("you dont have permission to create a new owner");
    }
    let {fullname , email , password} = req.body;
    let owner = await ownerModel.create({
      fullname,
      email,
      password,
    });
    res.status(201).send(owner);
  })
}

router.get('/',function(req,res){
  res.send("helllo");
})
console.log(process.env.NODE_ENV);

module.exports = router;