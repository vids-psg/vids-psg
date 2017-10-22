const path = require('path');

module.exports = {
    context: path.join(__dirname, '/public/javascript'),
    entry: './passwordscore.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public/javascript')
    }
}
