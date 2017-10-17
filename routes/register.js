var express = require('express');
var argon2 = require('argon2');
var db = require('../database');
var router = express.Router();

/* GET register page. register.ejs */
router.get('/', function (req, res, next) {
    res.render('register', {
        title: 'Register',
    });
});

/* POST register page. register.ejs */
router.post('/', function (req, res) {
    if (!req.body) return res.sendStatus(400);
    if (!(req.body.username || req.body.password)) {
        return res.status(400).send("Missing username or password");
    }
    // Check for password match
    if (req.body.password != req.body.password_confirm)
        return res.send('Passwords do not match');
    var username = req.body.username;
    // Check if username exists
    db.query('SELECT userID from users WHERE username=$1', [username], (selectError, selectResponse) => {
        // If username exists
        if (selectResponse.rowCount < 1) {
            argon2.hash(req.body.password).then(hash => {
                db.query('INSERT INTO users(username, password) VALUES ($1, $2)', [username, hash], (insertError, insertResponse) => {
                    if (insertError) console.log(insertError);
                });
                res.send('Registered');
            });
        }
        else res.send('Username exists');
    });
});

module.exports = router;
