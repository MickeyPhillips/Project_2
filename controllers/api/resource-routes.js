const router = require('express').Router();
const {Resource} = require('../../models');
const { sequelize } = require('../../models/Employee');
const withAuth = require('../../utils/auth');
const roleAuth = require('../../utils/role-auth');

router.get('/', withAuth, (req, res) => {
    Resource.findAll().then(resourceDB => res.json(resourceDB))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', withAuth, roleAuth, (req, res) => {
    Resource.create(
        {
            name: req.body.name,
            description: req.body.description,
            link: req.body.link
        }
    ).then(resourceDB => {
        res.json(resourceDB);
    }).catch(err => {
        console.log(err);
        res.status(400).json(err)
    });
});

router.delete('/:id', withAuth, roleAuth,  (req, res) => {
    console.log(req.body.id)
    Resource.destroy({
        where: {
            id: req.params.id
        }
    }).then(resourceDB => {
        if(!resourceDB){
            res.status(404).json({ message: 'No link found with this ID'})
            return;
        };
        res.json(resourceDB);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;