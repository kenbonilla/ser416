const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('rentals', {title: 'Best Community Service'});
});

router.get('/equipment', function(req, res, next) {
  res.render('equipment', {title: 'Best Community Service'});
});

router.get('/rooms', function(req, res, next) {
  res.render('rooms', {title: 'Best Community Service'});
});

module.exports = router;
