const router = require('express').Router();
const homeRoutes = require('./home-routes')
// const dashboardRoute = require('./dashboard_routes');
const apiRoutes = require('./api');
const { ExpressHandlebars } = require('express-handlebars');


router.use('/api', apiRoutes);
router.use('/', homeRoutes);
// router.use('/login', dashboardRoute)

module.exports = router;

// require('express').Router().use()