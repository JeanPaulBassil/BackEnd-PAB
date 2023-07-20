console.log("Start of database.js")

const Sequelize = require('sequelize'); 
const config = require('../config');

const sequelize = new Sequelize(config.development.mySql.options)

async function connectToMySql(){
  try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
  } catch (error) {
      console.error('Unable to connect to the database:', error);
      process.exit(1)
  }
}

connectToMySql()
config.development.mySql.client = sequelize

console.log("end of database.js")