const { DataTypes } = require('sequelize');
const sequelize = require('../instances/pg');

const Client = sequelize.define('Client', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fullname: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  cpf: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'clients',
  timestamps: false
});

module.exports = Client;