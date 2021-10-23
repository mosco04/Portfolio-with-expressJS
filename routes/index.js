var express = require('express');
var router = express.Router();
var path = require('path')
const { body,validationResult } = require('express-validator');
const JSONdb = require('simple-json-db');
const db = new JSONdb(__dirname + '..\database\database.json');
// hardcode username and password
db.set("username", "edward",)
db.set("password", "edward_007",)
db.set('isLoggedIn', false)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
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
    res.render('business', { title: 'Business' });
  }else{
    res.redirect('/login') 
    // ('login', { title: 'Login' });
  }
});
// Auth route
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

//Auth result
router.post('/login', function(req, res, next) {
  // check username and password
  ((req.body.username === db.get('username')) &&
  (req.body.password === db.get('password')))  ?
  res.redirect('/business'): 
  res.render('login', { title: 'Wrong' }) 

  // res.redirect('/login')

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



module.exports = router;
