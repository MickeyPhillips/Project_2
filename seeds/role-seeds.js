const { Role } = require('../models');

const roleData = [
    {
        id: 1,
        name: 'admin'
    },
    {
        id: 2,
        name: 'employee'
    }
]
const seedRole = () => Role.bulkCreate(roleData);
module.exports = seedRole;