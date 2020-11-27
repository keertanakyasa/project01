const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId
const bcrypt=require("bcrypt")

const jwt=require("jsonwebtoken")

const { Registers } = require('../models/registers');
router.get('/', verifyToken, (req,res)=>{
    return res.status(200).json(decodedToken.username);
  })
  
  var decodedToken='';
  function verifyToken(req,res,next){
    let token = req.query.token;
  
    jwt.verify(token,'secret', function(err, tokendata){
      if(err){
        return res.status(400).json({message:' Unauthorized request'});
      }
      if(tokendata){
        decodedToken = tokendata;
        next();
      }
    })
  }

module.exports = router;