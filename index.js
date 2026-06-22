const express = require('express');
const app = express();
const users = require('./Users.js');
const fs = require('fs');
const env = require('dotenv').config();
const port = process.env.PORT || 3000;
const userRoutes = require('./routes/user.js');

// Parse request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use user routes
app.use('/loans/api/Users', userRoutes);

app.get('/loans/api', (req, res) => {
  res.send('Hello World!');
  console.log('app started');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});