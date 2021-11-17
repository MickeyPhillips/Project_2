const router = require('express').Router();
const homeRoutes = require('./home-routes')
// const dashboardRoute = require('./dashboard_routes');
const apiRoutes = require('./api');


router.use('/api', apiRoutes);
router.use('/', homeRoutes);
// router.use('/login', dashboardRoute)

module.exports = router;
