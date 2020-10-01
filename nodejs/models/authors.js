const mongoose = require('mongoose');

var Authors = mongoose.model('Authors', {
  Id: {
    type: Number

  },
  Firstname: {
    type: String
  },
Lastname: {
  type: String
},
Books:[
  {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Books'
  }
]
});



module.exports = {Authors};
