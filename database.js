const { Pool } = require('pg');

var pool = new Pool({
    user: 'vids_psg',
    password: 'vids_psg',
    host: 'db',
    database: 'vids_psg'
});

pool.connect();

module.exports = pool;