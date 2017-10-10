var express = require('express');
var router = express.Router();

/* GET login page. login.ejs */
router.get('/', function(req, res, next) {
  res.render('login', { 
  	title: 'Log-in',
  });
});

module.exports = router;
