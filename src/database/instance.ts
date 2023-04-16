const { Sequelize } = require('sequelize');
require('dotenv').config()

let database = {
    host: process.env.HOST,
    name: process.env.DATABASE,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    port: process.env.PORT
}

const sequelize = new Sequelize(database.name, database.username, database.password, {
    host: database.host,
    port: database.port,
    logging: false,
    dialect: 'mysql'
  });

  export default sequelize
