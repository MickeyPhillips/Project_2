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
});
router.get('/employee-login', (req, res) => {
    if(req.session.loggedIn){
        res.redirect('dashboard');
        return;
    }
    res.render('employee-login');
})

router.get('/contact-us', (req, res) => {
    res.render('contact-us');
})

router.get('/admin', (req, res) => {
    res.render('admin')
})


// router.get('*', (req, res) => {
//     res.render('home');
// })

module.exports = router;