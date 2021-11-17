const router = require('express').Router();
const homeRoutes = require('./home-routes')
// const dashboardRoute = require('./dashboard_routes');

router.use('/', homeRoutes);
// router.use('/login', dashboardRoute)


module.exports = router;
