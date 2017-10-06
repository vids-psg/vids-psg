const express = require('express');
const { Client } = require('pg');
const app = express();
const client = new Client({
    host: 'db',
    user: 'vids-psg',
    password: 'vids-psg',
    database: 'vids_psg',
});
client.connect();

app.use('/', express.static('www'));

app.get('/database', async (req, res) => {
    var response = await client.query('SELECT * from vids_psg');
    res.send(response);
    client.end();
    res.send("<h2>Hello!</h2>");
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});
