const router = require('express').Router();
const {Employee, Role} = require('../../models');

router.get('/', (req, res) => {
    Employee.findAll({
        attributes: {exclude: ['password', 'role_id']},
    }).then(userData => res.json(userData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Employee.findOne({
        attributes: {exclude: ['password']},
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Role,
                attributes: ['name']
            }
        ]
    }).then(userData => {
        if(!userData){
            res.status(404).json({ message: "No user found with this ID"});
            return;
        }
        res.json(userData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//create user


module.exports = router;