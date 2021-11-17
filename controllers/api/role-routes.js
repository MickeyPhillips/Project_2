const router = require('express').Router();
const {Role, Employee} = require('../../models');

router.get('/', (req, res) => {
    Role.findAll(
        {
            attributes: {exclude: ['name']},
            include: [
                {
                    model: Employee,
                    attributes: ['email']
                }
            ]
        }
    ).then(roleDB => res.json(roleDB))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Role.findOne({
        where: {
            id: req.params.id
        },
        attributes: {exclude: ['name']},
        include: [
            {
                model: Employee,
                attributes: ['email']
            }
        ]
    }).then(roleData => res.json(roleData))
    .catch(err => {
        console.log(err),
        res.status(500).json(err)
    })
})

module.exports = router;