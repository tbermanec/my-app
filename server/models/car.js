module.exports = (sequelize, DataTypes) => {
    const Car = sequelize.define('Car', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      manufacturer: {
        type: DataTypes.TEXT,
        allowNull: true  
      },
      year: {
        type: DataTypes.TEXT,
        allowNull: true  
      },
      owner_id: {
        type: DataTypes.INTEGER,
        allowNull: true  
      },
    }, {
      timestamps: false
    });
    return Car;
  };