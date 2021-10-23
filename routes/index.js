var express = require('express');
var router = express.Router();
var path = require('path')
const JSONdb = require('simple-json-db');       //dependency to use a json file as a database
const fs = require('fs')

const dbPath = __dirname + '..\database\database.json' 
const contacsPath =path.join(__dirname, '..', 'database', 'contactsdb.json')  
const db = new JSONdb(dbPath);

// hardcode username and password
db.set("username", "edward",)
db.set("password", "edward_007",)
db.set('isLoggedIn', false)

//read the conntacts json file and add it to the json database
fs.readFile(contacsPath, 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
  db.set('contacts', obj.contacts)
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
  console.log(db.get('contacts'));
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

// About me route
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

// Business route
router.get('/business', function(req, res, next) {
  if(db.get('isLoggedIn')){
    res.render('business', { title: 'Business', contacts: db.get('contacts') });
  }else{
    res.redirect('/login') 
  }
});

//Delete contacts route
router.get('/delete/:id', function(req, res, next) {
  const contacts = db.get('contacts')
  const {id} = req.params
  const newContacts = contacts.filter(item => item.id !== id)
  db.set('contacts', newContacts)
});

// Auth route
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

// Auth logout route
router.get('/logout', function(req, res, next) {
  db.set('isLoggedIn', false)
  res.redirect('/')
});

//Auth result
router.post('/login', function(req, res, next) {
  // check for correct username and password
  if(((req.body.username === db.get('username')) &&
  (req.body.password === db.get('password')))){
    db.set('isLoggedIn', true)    
    res.redirect('/business')
  }else{
    res.render('login', { title: 'Wrong' }) 
  }
});

// Projects route
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Project' });
});

// Contact me route
router.get('/contactme', function(req, res, next) {
  res.render('contactme', { title: 'Contactme' });
});

// Services route
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});



module.exports = {router, db};
