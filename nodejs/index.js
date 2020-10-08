const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var bookscontroller = require('./controllers/bookscontroller.js')
var authorscontroller = require('./controllers/authorscontroller.js')

var app = express();


app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));



app.use('/books', bookscontroller);
app.use('/authors',authorscontroller);

app.listen(3000, () => console.log('Server started at port : 3000'));
