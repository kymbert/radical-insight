const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', {title: 'Home'});
});

router.get('/about', (req, res, next) => {
  res.render('about', {title: 'About'});
});

router.get('/get-involved', (req, res, next) => {
  res.render('getInvolved', {title: 'Get Involved'});
});

router.get('/how-it-works', (req, res, next) => {
  res.render('howItWorks', {title: 'How it (will) Work'});
});

router.get('/privacy', (req, res, next) => {
  res.render('privacy', {title: 'Privacy Policy'});
});

router.get('/resources', (req, res, next) => {
  res.render('resources', {title: 'Resources'});
});

router.get('/terms', (req, res, next) => {
  res.render('terms', {title: 'Terms & Conditions'});
});

module.exports = router;
