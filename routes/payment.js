const express = require('express');
const router = express.Router();

/* Confirmation page */
router.get('/confirm', function(req, res, next) {
  res.render('payment/confirm', {title: 'Best Community Service'});
});

module.exports = router;
