var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/how-it-works', function(req, res, next) {
    res.render('howItWorks', { title: 'How it (will) Work' });
});

router.get('/history', function(req, res, next) {
    res.render('history', { title: 'History' });
});

router.get('/get-involved', function(req, res, next) {
    res.render('getInvolved', { title: 'Get Involved' });
});

router.get('/resources', function(req, res, next) {
    res.render('resources', { title: 'Resources' });
});

module.exports = router;
