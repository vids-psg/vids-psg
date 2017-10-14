var express = require('express');
var argon2 = require('argon2');
var router = express.Router();

/* GET login page. login.ejs */
router.get('/', function(req, res, next) {
  res.render('login', { 
  	title: 'Log-in',
  });
});

/* POST login page. login.ejs */
router.post('/', function(req, res) {
    if (!req.body) return res.sendStatus(400);
    if (!(req.body.username || req.body.password)) {
        return res.status(400).send("Missing username or password");
    }
    argon2.hash(req.body.password).then(hash => {
        res.send(hash);
    });
});

module.exports = router;
