var zxcvbn = require('zxcvbn');

document.getElementById('password').addEventListener('input', function() {
    var result = zxcvbn(document.getElementById('password').value);
    var strengthBar = "----";
    if (result.score === 0) strengthBar = "----";
    if (result.score === 1) strengthBar = "+---";
    if (result.score === 2) strengthBar = "++--";
    if (result.score === 3) strengthBar = "+++-";
    if (result.score === 4) strengthBar = "++++";
    document.getElementById('password-score').innerHTML = strengthBar;
});
