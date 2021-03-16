const express = require('express');
const app = express();

const db = require('./config/db');

db();

app.listen(5000, console.log('server is up and running on port 5000'));
