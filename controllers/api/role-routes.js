const router = require('express').Router();
const {Role} = require('../../models');

router.get('/', (req, res) => {
    Role.findAll().then(roleDB => res.json(roleDB))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;