const { Employee } = require('../models');

const employeeData = [
    {
        email: '123@gmail.com',
        password: 'hello',
        role_id: 1
    },
    {
        email: '456@gmail.com',
        password: 'hello1',
        role_id: 2
    },
    {
        email: '789@gmail.com',
        password: 'hello2',
        role_id: 2
    },
    {
        email: '1123@gmail.com',
        password: 'hello3',
        role_id: 2
    }
]
const seedEmployee = () => Employee.bulkCreate(employeeData);
module.exports = seedEmployee;