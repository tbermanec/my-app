require('dotenv').config();

module.exports = {
  development: {
    use_env_variable: process.env.CONNECTION_STRING,
    url: process.env.CONNECTION_STRING,
    dialect: 'postgres',
  },
  test: {
    url: '',
    dialect: 'postgres'
  },
  production: {
    url: '',
    dialect: 'postgres'
  }
};