const db = require('../config/db');

module.exports = {

    createCar: (req, res, next) => {
      const { name, manufacturer, year, owner_id } = req.body;
  
      db.cars.create({
        name: name,
        manufacturer: manufacturer,
        year: year,
        owner_id: owner_id
      })
        .then(newCar => {
          res.json(newCar);
        })
        .catch(err => console.log(err));  
    },

    getCars: (req, res, next) => {
        db.cars.findAll({
          raw: true,
          order: [['name', 'ASC']]
        })
          .then(cars => res.status(200).send(cars))
          .catch(err => res.status(500).send(err));
    },
}  