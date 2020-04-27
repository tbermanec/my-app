const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Set up express
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('dotenv').config();

const { CONNECTION_STRING } = process.env;

const Sequelize = require('sequelize');

const sequelize = new Sequelize(CONNECTION_STRING);

//testing the db connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Require routes
require('./routes')(app);

app.get('*', (req, res) =>
    res.status(200).send('Server is up')
);

//Server port
const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
