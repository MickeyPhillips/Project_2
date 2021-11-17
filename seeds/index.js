const seedResource = require('./resource-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true});
    await seedResource();
};

seedAll();