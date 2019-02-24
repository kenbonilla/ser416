const express = require('express');
const router = express.Router();

/* User panel */
router.get('/', function(req, res, next) {
  res.render('users/user-panel', {title: 'Best Community Service'});
});

/* User panel */
router.get('/user-panel', function(req, res, next) {
  res.redirect('/users');
});

/* register */
router.get('/register', function(req, res, next) {
  res.render('users/register', {title: 'Best Community Service'});
});

/* login */
router.get('/login', function(req, res, next) {
  res.render('users/login', {title: 'Best Community Service'});
});
module.exports = router;
