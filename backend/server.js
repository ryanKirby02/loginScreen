const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const db = require('./config/db');

db();
app.use(express.json());
app.use('/api/users', userRoutes);

app.listen(5000, console.log('server is up and running on port 5000'));
