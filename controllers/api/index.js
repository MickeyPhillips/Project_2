const router = require('express').Router();
const linkRoutes = require('./resource-routes');

router.use('/link', linkRoutes);


module.exports = router;
