const db = require('../config/db');

const { getUserByAuthId } = require('./../dbMethods.js');

module.exports = {
  createUser: (req, res, next) => {
    const { username, password, email } = req.body;

    db.users
      .build({
        username: username,
        password: password,
        email: email,
      })
      .then((newUser) => {
        res.json(newUser);
      })
      .catch((err) => console.log(err));
  },

  getLogStatus: (req, res, next) => {
    res.status(200).json(req.session);
  },

  logout: (req, res, next) => {
    req.session.destroy();
    res.redirect('/');
  },

  getUser: (req, res, next) => {
    if (!req.user) {
      res.redirect('/login');
    } else {
      req.user === req.session.passport.user;
      let auth_id = req.user.id;

      getUserByAuthId(auth_id).then((user) => {
        res.status(200).send(user);
      });
    }
  },

  getUserById: (req, res, next) => {
    let id = req.params.id;

    db.users
      .findOne({
        where: { id: id },
      })
      .then((user) => res.status(200).send(user))
      .catch((err) => res.status(500).send(err));
  },

  getUsers: (req, res, next) => {
    db.users
      .findAll({
        raw: true,
        order: [['username', 'ASC']],
      })
      .then((users) => res.status(200).send(users))
      .catch((err) => res.status(500).send(err));
  },

  getUserCars: (req, res, next) => {
    let id = req.params.id;

    db.cars
      .findAll({
        where: {
          owner_id: id,
        },
      })
      .then((users) => res.status(200).send(users))
      .catch((err) => res.status(500).send(err));
  },

  getUserPassportInfo: (req, res, next) => {
    if (!req.user) {
      res.redirect('/login');
    } else {
      req.user === req.session.passport.user;
      res.status(200).send(JSON.stringify(req.user, null, 10));
    }
  },
};
