const seedResource = require('./resource-seeds');

const sequelize = require('../config/connection');
const seedEmployee = require('./employee-seeds');
const seedRole = require('./role-seeds');

const seedAll = async () => {
    await sequelize.sync({ force: true});
    await seedResource();
    await seedRole();
    await seedEmployee();
};

seedAll();