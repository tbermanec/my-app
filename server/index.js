const express = require('express');
const app = express();

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



// Find all users
//app.get('/users', (req, res) => { 
  //  User.findAll().then(users => {
  //      console.log("All users:", JSON.stringify(users, null, 4));
  //    });
 //})

 


//Server port
const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
