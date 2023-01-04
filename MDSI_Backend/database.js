const {Client} = require('pg');

const db_client = new Client({
    host: 'localhost',
    user: 'praveen',
    port: '5432',
    password: 'praveen@1',
    database: 'mdsi'
})

module.exports = db_client;