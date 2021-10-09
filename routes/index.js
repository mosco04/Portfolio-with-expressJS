var express = require('express');
var router = express.Router();

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
