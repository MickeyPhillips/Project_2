const Product = require('./Product');
const Employee = require('./Employee');
const Category = require('./Category');
const Resource = require('./Resource');
const Role = require('./Role');

Employee.hasMany(Resource, {
    foreignKey: 'employee_id'
});

Role.belongsTo(Employee, {
    foreignKey: 'role_id'
})

// Employee expect: 
// {
//     username
//     password
//     role: please automatic assign it as 2 (regular)
// };

// Resource expect:
// {
//     name
//     description
//     link
// }

// Role expect: 
// {
//     name (1-admin)(2-regular)
// }

module.exports = { Employee, Role }