var express = require('express');
var router = express.Router();
var path = require('path')
const { body,validationResult } = require('express-validator');
const JSONdb = require('simple-json-db');
const db = new JSONdb(__dirname + '..\database\database.json');
// hardcode username and password
db.set("username", "edward",)
db.set("password", "edward_007",)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

// About me roue
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

// Auth roue
router.get('/login', function(req, res, next) {
  console.log(db.get('username'))
  res.render('login', { title: 'Login' });
});

router.post('/login', function(req, res, next) {
  // res.render('login', { title: 'Login' });
  console.log(req.body.email)
  console.log(req.body.password)
});

// Projects route
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'project' });
});

// Contact me route
router.get('/contactme', function(req, res, next) {
  res.render('contactme', { title: 'contactme' });
});

// Services route
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'services' });
});



module.exports = router;
