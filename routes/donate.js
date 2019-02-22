const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('donate', {title: 'Best Community Service'});
});

module.exports = router;
