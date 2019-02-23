const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('volunteer', {title: 'Best Community Service'});
});

module.exports = router;
