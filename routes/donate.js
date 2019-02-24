const express = require('express');
const router = express.Router();

/* GET donation page. */
router.get('/', function(req, res, next) {
  res.render('donate', {title: 'Best Community Service'});
});

/** GET confirmatiokn of payment page */
router.get('/confirm', function(req, res, next) {
  res.render('payment/confirm', {title: 'Best Community Service'});
});

module.exports = router;
