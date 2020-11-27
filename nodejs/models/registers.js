const mongoose = require('mongoose');

var bcrypt = require('bcrypt');
var Registers = mongoose.model('Register',{


         email:{
         type:String,
         require:true
     },
     
         username:{
             type:String,
             require:true
         },
         password:{
             type:String,
             require:true
         },
         creation_dt:{
             type:Date, 
             require:true
            }
        });

           
    

    
            module.exports = {Registers};
