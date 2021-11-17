const route = require('express').Router();
const {Employee, Role} = require('../../models');

route.get('/', (req, res) => {
    Employee.findAll({
        attribute: {exclude: ['password']}
    }).then(userData => res.json(userData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

route.get('/:id', (req, res) => {
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

module.exports = route;