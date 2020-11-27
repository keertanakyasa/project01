const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId
var bcrypt = require('bcrypt')


var  {Registers}  = require('../models/registers');


router.post('/',(req, res) => {
        var register = new Registers ({
          email: req.body.email,
          username: req.body.username,
          password: req.body.password,
          creation_dt: Date.now()
        });

        register.hashPassword = function hashPassword(password){
          return bcrypt.hashSync(password,10);
      }
      
      register.isValid = function(hashedpassword){
          return  bcrypt.compareSync(hashedpassword, this.password);
      }
        let promise = register.save();


        promise.then(function(doc){
          return res.status(201).json(doc);
        })
        promise.catch(function(err){
          return res.status(501).json({message:'Error registering user'}) 
               })
              })

              router.post('/login', function(req,res) {
                let promise = Registers.findOne({email:req.body.email}).exec();
             
                promise.then(function(doc){
                 if(doc) {
                   if(doc.isValid(req.body.password)){
                       // generate token
                       let token = jwt.sign({username:doc.username},'secret', {expiresIn : '3h'});
             
                       return res.status(200).json(token);
             
                   } else {
                     return res.status(501).json({message:' Invalid Credentials'});
                   }
                 }
                 else {
                   return res.status(501).json({message:'User email is not registered.'})
                 }
                });
            
             
                promise.catch(function(err){
                  return res.status(501).json({message:'Some internal error'});
                })
             })
             
             

              router.get('/username', verifyToken, (req,res)=>{
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