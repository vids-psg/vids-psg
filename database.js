const { Client } = require('pg');
var client = new Client({
    user: 'vids-psg',
    password: 'vids-psg',
    host: 'localhost',
    database: 'vids-psg'
});

client.connect();

module.exports = client;