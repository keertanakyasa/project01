const mongoose = require('mongoose');
var Books = mongoose.model('Books', {
  

  BookId:{
    type:String
  },
  bookname: {
    type: String
  },

 Description: {
    type: String
  },
  Pagecount: {
    type: Number
  },
  Publishdate: {
    type: Date
},

Author: {
  type:String,
  "ref":"Authors"

},


});




module.exports= {Books};
