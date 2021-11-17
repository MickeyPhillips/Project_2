const route = require('express').Router();
const resourceRoutes = require('./resource-routes');
const employeeRoutes = require('./employee-routes');
const roleRoutes = require('./role-routes')

route.use('/link', resourceRoutes);
route.use('/employee', employeeRoutes);
route.use('/role', roleRoutes);

module.exports = route;