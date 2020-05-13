const db = require('./config/db');

module.exports = {

  getUsers: () => {
    return db.users.findAll({
      raw: true,
      order: [['username', 'ASC']]
    })
  },

  getUserById: (id) => {
    return db.users.findOne({
      id: id
    })
  },

  getUserByAuthId: (AuthId) => {
    return db.users.findOne({
      where: { auth_id: AuthId }
    })
  },

  createUserByAuthId: (authId, email) => {
    return db.users.create({
      auth_id: authId,
      email: email
    })
  },

}