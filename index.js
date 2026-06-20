const express = require('express');
const app = express();
const users = require('./Users.js');
const fs = require('fs');
const port = 3000;

// Parse request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/loans/api', (req, res) => {
  res.send('Hello World!');
  console.log('app started');
});

app.post('/loans/api/registerUsers', (req, res) => {
  users.createusers(req, res);
});

app.put('/loans/api/updateUsers', (req, res) => {
  res.send('Hello World!');}
);

app.get('/loans/api/getUsers', (req, res) => {
    users.getusers(req, res);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});