const { Model, DataTypes } = require('sequelize');
const sequelize = require('../instances/pg');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  age: {
    type: DataTypes.INTEGER,
    defaultValue: 18
  },
}, {
  tableName: 'users',
  timestamps: false
});

module.exports = User;