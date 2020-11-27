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
}
});



module.exports = {Authors};
