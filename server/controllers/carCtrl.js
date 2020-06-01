const db = require('../config/db');

module.exports = {
  createCar: (req, res, next) => {
    const {
      name,
      manufacturer,
      year,
      imageUrl,
      description,
      short_info,
    } = req.body;

    db.cars
      .create({
        name,
        manufacturer,
        year,
        imageUrl,
        description,
        short_info,
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
    let carId = req.params.id;

    const { name, manufacturer, year, imageUrl, description } = req.body;

    db.cars
      .update(
        {
          name,
          manufacturer,
          year,
          imageUrl,
          description,
        },
        { where: { id: carId } }
      )
      .then(function (rowsUpdated) {
        res.json(rowsUpdated);
      });
  },

  deleteCar: (req, res) => {
    let carId = req.params.id;

    db.cars.destroy({ where: { id: carId } }).then(() => {
      res.sendStatus(200);
    });
  },
};
