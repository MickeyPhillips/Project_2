const router = require('express').Router();
const homeRoutes = require('./home-routes')
const dashboardRoute = require('./dashboard-routes');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoute)

module.exports = router;

// require('express').Router().use()