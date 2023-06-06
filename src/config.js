const { Sequelize } = require('sequelize');
require('dotenv').config(); // Load environment variables
// Configure the database connection
require('dotenv').config(); // Load environment variables

// Get the database configuration from environment variables
const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

// Configure the database connection
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql',
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
