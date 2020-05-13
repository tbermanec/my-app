module.exports = (sequelize, DataTypes) => {
    const Car = sequelize.define('Car', {
      id: {
        type: DataTypes.TEXT,
        primaryKey: true,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false
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
        allowNull: false  
      },
    }, {
      timestamps: false
    });
    return Car;
  };