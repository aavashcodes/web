/*index.js - 301229312 - Aavash Chapagain - Assignment1*/


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function (req, res, next) {
    res.render('about', { title: 'About' });
});

router.get('/contact', function (req, res, next) {
    res.render('contact', { title: 'Contact' });
});

router.get('/service', function (req, res, next) {
    res.render('service', { title: 'Service' });
});

router.get('/projects', function (req, res, next) {
    res.render('projects', { title: 'Projects' });
});

module.exports = router;
