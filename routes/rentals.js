const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('rentals', {title: 'Best Community Service'});
});

router.get('/equipment', function(req, res, next) {
  res.render('rentals/equipment', {title: 'Best Community Service'});
});

router.get('/rooms', function(req, res, next) {
  res.render('rentals/rooms', {title: 'Best Community Service'});
});

module.exports = router;
