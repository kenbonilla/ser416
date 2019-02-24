const express = require('express');
const router = express.Router();

/* GET services directory page. */
router.get('/', function(req, res, next) {
  res.render('services', {title: 'Best Community Service'});
});

/* GET shuttle service page. */
router.get('/shuttle', function(req, res, next) {
  res.render('services/shuttle', {title: 'Best Community Service'});
});

/* GET catering service page. */
router.get('/catering', function(req, res, next) {
  res.render('services/catering', {title: 'Best Community Service'});
});

/* GET education service page. */
router.get('/education', function(req, res, next) {
  res.render('services/education', {title: 'Best Community Service'});
});

/* GET class description page. */
router.get('/class', function(req, res, next) {
  res.render('services/class', {title: 'Best Community Service'});
});

/* GET search results page. */
router.get('/search', function(req, res, next) {
  res.render('services/search', {title: 'Best Community Service'});
});

/* GET payment page. */
router.get('/payment', function(req, res, next) {
  res.render('services/payment', {title: 'Best Community Service'});
});
module.exports = router;
