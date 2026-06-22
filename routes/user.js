const express = require('express');
const router = express.Router();
const users = require('../Users.js');


router.post('/', (req, res) => {
    users.createusers(req.body, res);
});

router.put('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/', (req, res) => {
    users.getusers(req, res);
});

module.exports = router;