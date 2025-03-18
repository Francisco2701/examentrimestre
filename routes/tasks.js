const express = require('express');
const router = express.Router();

let users = [];

router.get('/', (req, res) => {
    res.render('index', { users });
});

router.post('/add', (req, res) => {
    const { name, email } = req.body;
    if (name && email) {
        users.push({ id: users.length, name, email });
    }
    res.redirect('/');
});

router.post('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id);
    users = users.filter(user => user.id !== id);
    res.redirect('/');
});

module.exports = router;
