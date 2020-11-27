const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var bookscontroller = require('./controllers/bookscontroller.js')
var authorscontroller = require('./controllers/authorscontroller.js')
var registrationcontroller = require('./controllers/registrationcontroller.js');
var logincontroller = require('./controllers/logincontroller.js')
var usernamecontroller = require('./controllers/usernamecontroller')
var app = express();
var router = express.Router()


app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));


router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
app.use('/books', bookscontroller);
app.use('/authors',authorscontroller);
app.use('/registers', registrationcontroller);
app.use('/login',registrationcontroller);
app.use('/username',registrationcontroller)
app.listen(3000, () => console.log('Server started at port : 3000'));
