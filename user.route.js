const { Router } = require('express');
const { v4: uuidv4 } = require('uuid');
const router = Router();

router.get('/users', function (req, res) {
    const users = [
        { id: 1, name: 'DungTran' },
        { id: 2, name: 'Mai' },
    ];
    return res.status(200).json(users);
});

router.post('/users', function (req, res) {
    const { name, age } = req.body;
    const createUser = {
        id: uuidv4(),
        name,
        age,
    };
    return res.status(200).json(createUser);
});

module.exports = router;
