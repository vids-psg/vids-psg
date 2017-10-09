var express = require('express');
var router = express.Router();

/* GET home page. index.ejs */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'vids-psg', 
  	github: 'https://github.com/vids-psg/vids-psg'
  });
});

module.exports = router;