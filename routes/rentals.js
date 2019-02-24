const express = require('express');
const router = express.Router();

/* GET rentals directory page. */
router.get('/', function(req, res, next) {
  res.render('rentals', {title: 'Best Community Service'});
});

/* GET equipment rentals page */
router.get('/equipment', function(req, res, next) {
  res.render('rentals/equipment', {title: 'Best Community Service'});
});

/* GET room rentals page */
router.get('/rooms', function(req, res, next) {
  res.render('rentals/rooms', {title: 'Best Community Service'});
});

module.exports = router;
