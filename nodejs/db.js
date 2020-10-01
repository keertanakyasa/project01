const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydata',
 { useNewUrlParser: true ,
  useUnifiedTopology: true ,
useFindAndModify:false
 }, (err) => {
  if (!err)
  console.log('mongodb connected successfully...')
  else
  console.log('error in db connection : ' +JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;

