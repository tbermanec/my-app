const usersController = require('../controllers').users;
const carsController = require('../controllers').cars;

module.exports = app => {
    app.get('/api', (req, res) =>
      res.status(200).send({
        message: 'Welcome to the API'
      })
    );
    
    app.post('/api/users', usersController.createUser);
    app.get('/api/users', usersController.list);
    
    app.post('/api/cars', carsController.createCar);
    app.get('/api/cars', carsController.list);
  };