const router = require('express').Router();
const sequelize = require('../config/connection');
// I just added this to test the routes with the handlebars feel free to remove these routes
router.get('/', (req, res) => {
    res.render('home');
});
router.get('/products', (req, res) => {
    res.render('products');
});
router.get('/locations', (req, res) => {
    res.render('locations');
});
router.get('/careers', (req, res) => {
    res.render('careers');
})
router.get('/employee-login', (req, res) => {
    res.render('employee-login');
})



router.get('*', (req, res) => {
    res.render('home');
})

module.exports = router;