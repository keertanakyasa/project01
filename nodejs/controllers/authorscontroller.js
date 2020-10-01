const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId

var { Authors } = require('../models/Authors');

// => localhost:3000/books/
router.get('/', (req, res) => {
  Authors.find((err, docs) => {
    if (!err) { res.send(docs); }
    else { console.log('Error in Retrieving Books :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.get('/:id', (req, res) => {
        if (!ObjectId.isValid(req.params.id))
return res.status(404).send('No record with given id : ${req.params.id}');

Authors.findById(req.params.id, (err, doc) => {{
  if (!err) { res.send(doc); }
    else { console.log('Error in Retrieving Authors :' + JSON.stringify(err, undefined, 2)); }
}});
});

router.post('/', (req, res) => {
  var Author = new Authors({
ID: req.body.ID,
Firstname: req.body.Firstname,
Lastname: req.body.Lastname,
  });
  Author.save((err, doc) => {
    if(!err) { res.send(doc); }
    else { console.log('Error in Authors Save :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.put('/:id' , (req,res) => {
  if (!ObjectId.isValid(req.params.id))
  return res.status(404).send('No record with given id : ${req.params.id}');

  var Author = {
    ID: req.body.ID,
    Firstname: req.body.Firstname,
    Lastname: req.body.Lastname,
      };
      Authors.findByIdAndUpdate(req.params.id, { $set: Author }, { new: true }, (err,doc) => {
        if(!err) { res.send(doc); }
    else { console.log('Error in author update:' + JSON.stringify(err, undefined, 2)); }
      });
});

router.delete('/:id', (req, res) => {
  if (!ObjectID.isValid(req.params.id))
  return res.status(400).send('No record with given id : ${req.params.id}');

  Authors.findByIdAndRemove(req.params.id, (err,doc) => {
    if(!err) { res.send(doc); }
else { console.log('Error in Authors Save :' + JSON.stringify(err, undefined, 2)); }
  });
});

module.exports = router;
