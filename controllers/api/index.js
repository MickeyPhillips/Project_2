const route = require('express').Router();
const resourceRoutes = require('./resource-routes');
const employeeRoutes = require('./employee-routes');

route.use('/link', resourceRoutes);
route.use('/employee', employeeRoutes);

module.exports = route;