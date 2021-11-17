const router = require('express').Router();
const resourceRoutes = require('./resource-routes');
const employeeRoutes = require('./employee-routes');
const roleRoutes = require('./role-routes')

router.use('/link', resourceRoutes);
router.use('/employee', employeeRoutes);
router.use('/role', roleRoutes);

module.exports = router;