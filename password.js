var argon2 = require('argon2');

module.exports = function(password) {
    argon2.hash(password).then((hash) => {
        console.log(hash);
    });
}
