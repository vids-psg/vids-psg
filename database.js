const { Client } = require('pg');
var client = new Client({
    user: 'vids_psg',
    password: 'vids_psg',
    host: 'db',
    database: 'vids_psg'
});

client.on('error', (err) => {
    console.log(err);
});

client.connect();

module.exports = client;