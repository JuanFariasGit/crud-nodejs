const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(
  process.env.PG_DB,
  process.env.PG_USER,
  process.env.PG_PASSWORD,
  {
    dialect: 'postgres',
    port: parseInt(process.env.PG_PORT)
  }
)

module.exports = sequelize;