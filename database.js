const { Client } = require('pg');
var client = new Client({
    user: 'vids_psg',
    password: 'vids_psg',
    host: 'localhost',
    database: 'vids_psg'
});

client.connect();

module.exports = client;