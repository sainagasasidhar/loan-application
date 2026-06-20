const fs = require('fs');
const uuid = require('uuid');
function createusers(data, res) {
    const userData = data;
    userData.id = uuid.v4(); // Assign a unique ID to the new user

    fs.readFile('Users.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading users file');
            return;
        }
        const users = JSON.parse(data);
        users.push(userData);
        fs.writeFile('Users.json', JSON.stringify(users), (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error writing users file');
                return;
            }
            res.send('User created successfully');
        });
    });
}

function getusers(req, res) {
    fs.readFile('Users.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading users file');
            return;
        }
        const users = JSON.parse(data);
        res.json(users);
    });
};

function updateusers(req, res) {
    const userId = req.params.id;
    const updatedData = req.body;
    fs.readFile('Users.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading users file');
            return;
        }
        let users = JSON.parse(data);
        const userIndex = users.findIndex(user => user.id === userId);
        if (userIndex === -1) {
            res.status(404).send('User not found');
            return;
        }
        /* 
            Before: users[userIndex] = { id: "1", name: "Alice", age: 30 }
            updatedData = { age: 31, city: "NY" }
            After merge: { id: "1", name: "Alice", age: 31, city: "NY" }
        */
        users[userIndex] = { ...users[userIndex], ...updatedData }; 
        fs.writeFile('Users.json', JSON.stringify(users), (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error writing users file');
                return;
            }
            res.send('User updated successfully');
        });
    });
}
module.exports = { createusers, getusers, updateusers };