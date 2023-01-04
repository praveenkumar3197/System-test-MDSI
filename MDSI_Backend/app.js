const port = process.env.PORT || 5000;
const express = require('express');
const userRouters = require('./src/users/routers');
const db_Client = require('./database');
const app = express();

db_Client.query(`CREATE TABLE IF NOT EXISTS "users"("id" SERIAL, "name" VARCHAR(100) NOT NULL, "email" VARCHAR(100) NOT NULL, "gander" VARCHAR(10) NOT NULL, password VARCHAR(10) NOT NULL, PRIMARY KEY("id") )`);

app.use(express.json());

app.get('/', (req, res) => {
    res.send('helo world');
});
app.use('/api/users',userRouters);
app.listen(port, () => {
    console.log(`Listing Port ${port}!`)
});

db_Client.connect();