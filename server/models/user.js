module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER
    },
    username: {
      type: DataTypes.TEXT
    }
  });
  return User;
};