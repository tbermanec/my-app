const db = require('../config/db');

module.exports = {
  createCar: (req, res, next) => {
    const { name, manufacturer, year, imageUrl, description } = req.body;

    db.cars
      .create({
        name,
        manufacturer,
        year,
        imageUrl,
        description,
      })
      .then((newCar) => res.status(201).send(newCar))
      .catch((error) => res.status(400).send(error));
  },

  getCars: (req, res, next) => {
    db.cars
      .findAll({
        raw: true,
        order: [['name', 'ASC']],
      })
      .then((cars) => res.status(200).send(cars))
      .catch((err) => res.status(500).send(err));
  },

  getCarById: (req, res, next) => {
    let id = req.params.id;

    db.cars
      .findOne({
        where: { id: id },
      })
      .then((car) => res.status(200).send(car))
      .catch((err) => res.status(500).send(err));
  },

  updateCar: (req, res) => {
    const id = req.params.id;
    const { name, manufacturer, year, imageUrl, description } = req.body;

    db.Car.update(id, name, manufacturer, year, imageUrl, description).then(
      (response) => {
        res
          .status(200)
          .json(response)
          .catch(console.log('Error in update Product!'));
      }
    );
  },
};
