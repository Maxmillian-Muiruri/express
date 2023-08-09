const express = require('express');
const dotenv = require('dotenv');

// load enviromwnt variables from .env file

dotenv.config();

const app = express();
const port = process.env.port || 3000;


//defining a Get route

app.get('/', (req, res) => {
    res.status(200).send('welcome to Node.js');
});

// starting the server
app.listen(port,() => {
    console.log('Sever is running on port ${port}');
});