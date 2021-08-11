const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  dialect: 'postgres',
  host: process.env.PG_HOST,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DB,
  port: parseInt(process.env.PG_PORT),
  define: {
    timestaps: false,
    underscored: true
  }
}
