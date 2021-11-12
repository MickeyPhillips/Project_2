const Product = require('./Product');
const Employee = require('./Employee');
const Category = require('./Category');
const Resource = require('./Resource');

Employee.hasMany(Resource, {
    foreignKey: 'employee_id'
});
