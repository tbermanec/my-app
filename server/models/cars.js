module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define(
    'Car',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.TEXT,
      },
      manufacturer: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      year: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      short_info: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      imageUrl: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      owner_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
  return Car;
};
