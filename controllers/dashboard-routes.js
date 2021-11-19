const router = require('express').Router();
const sequelize = require('../config/connection');
const { Resource } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Resource.findAll(
        {
            attributes: ['name', 'description', 'link']
        }
    ).then(resourceDB => {
        console.log(resourceDB);
        const resources = resourceDB.map(resource => resource.get({ plain: true }));
        console.log(resources);
        res.render('dashboard', { resources, loggedIn: req.session.loggedIn});
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;