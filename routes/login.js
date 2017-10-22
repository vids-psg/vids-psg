var express = require('express');
var sodium = require('libsodium-wrappers-sumo');
var db = require('../database');
var router = express.Router();

/* GET login page. login.ejs */
router.get('/', function (req, res, next) {
    res.render('login', {
        title: 'Log-in'
    });
});

/* POST login page. login.ejs */
router.post('/', function (req, res, next) {
    if (!req.body) return res.sendStatus(400);
    if (!(req.body.username || req.body.password)) {
        return res.status(400).send("Missing username or password");
    }
    // Get username and password from db from username
    db.query('SELECT * FROM users WHERE username=$1', [req.body.username], (selectError, selectResponse) => {
        if (selectError) console.log(selectError);
        // If username found
        if (selectResponse.rowCount > 0) {
            if (sodium.crypto_pwhash_str_verify(selectResponse.rows[0].password, req.body.password)) {
                    res.send("Login success");
            }
            else {
                res.send("Username or password incorrect");
            }
        }
        else res.send("Username or password incorrect");
    });
});

module.exports = router;
