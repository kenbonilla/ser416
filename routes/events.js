const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('events', {title: 'Best Community Service'});
});

module.exports = router;
