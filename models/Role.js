const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Role extends Model {};

Role.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'role'
    }
);

module.exports = Role;