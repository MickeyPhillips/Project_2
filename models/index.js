const Employee = require('./Employee');
const Resource = require('./Resource');
const Role = require('./Role');


// Role.hasMany(Employee, {
//     foreignKey: "role_id"
// })

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

module.exports = { Employee, Role, Resource  }
