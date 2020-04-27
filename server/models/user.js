module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUIDV1,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    username: {
      type: DataTypes.TEXT
    },
    city: {
      type: DataTypes.TEXT
    }
  }, {
    timestamps: false
  });
  return User;
};