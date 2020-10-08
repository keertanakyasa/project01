const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId

var { Books } = require('../models/books');

// => localhost:3000/books/
router.get('/', (req, res) => {
  Books.find((err, docs) => {
    if (!err) { res.send(docs); }
    else { console.log('Error in Retrieving Books :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
         return res.status(404).send(`No record with given id : ${req.params.id}` );

Books.findById(req.params.id, (err, doc) => {
  if (!err) { res.send(doc); }
    else { console.log('Error in Retrieving Books :' + JSON.stringify(err, undefined, 2)); }
});
});

router.post('/', (req, res) => {
  var book = new Books({
BookId: req.body.BookId,
bookname: req.body.bookname,
Author: req.body.Author,
Description: req.body.Description,
Pagecount: req.body.Pagecount,
Publishdate: req.body.Publishdate,
  });
  book.save((err, doc) => {
    if(!err) { res.send(doc); }
    else { console.log('Error in books Save :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.put('/:id' , (req, res) => {
  if (!ObjectId.isValid(req.params.id))
  return res.status(404).send(`No record with given id :  ${req.params.id}`);
  var book = {
    BookId: req.body.BookId,
    bookname: req.body.bookname,
    Author: req.body.Author,
    Description: req.body.Description,
    Pagecount: req.body.Pagecount,
    Publishdate: req.body.Publishdate,
      };
      Books.findByIdAndUpdate(req.params.id, { $set: book }, { new: true}, (err,doc) => {
        if(!err) { res.send(doc); }
    else { console.log('Error in books Update :' + JSON.stringify(err, undefined, 2)); }
      });
});

router.delete('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
  return res.status(404).send(`No record with given id : ${req.params.id}`);

  Books.findByIdAndRemove(req.params.id, (err,doc) => {
    if(!err) { res.send(doc); }
else { console.log('Error in books Delete :' + JSON.stringify(err, undefined, 2)); }
  });
});


module.exports = router;
