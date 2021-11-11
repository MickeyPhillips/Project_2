const router = require('express').Router();
const homeRoutes = require('./home-routes');
// Feel free to remove the routers I used them to test the handlebars
router.use('/', homeRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;