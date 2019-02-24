const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('services', {title: 'Best Community Service'});
});

router.get('/shuttle', function(req, res, next) {
  res.render('services/shuttle', {title: 'Best Community Service'});
});

router.get('/catering', function(req, res, next) {
  res.render('services/catering', {title: 'Best Community Service'});
});

module.exports = router;
