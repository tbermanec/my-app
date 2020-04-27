const User = require('../models').User;

module.exports = {
  create(req, res) {
    return User.create({
      //id: req.body.id,
      username: req.body.username,
      city: req.body.city
    })
      .then(console.log(req.body))
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return User.findAll({
      order: [['id', 'ASC']]
      })
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error));
  }
};