// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Menu model (table) by extending off Sequelize's Model class
class Menu extends Model {}

// set up fields and rules for Menu model
Menu.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false      
    },
    ingredients: {
        type: DataTypes.TEXT,
        allowNull: false   
    },
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
       validate: {
        isDecimal: true        
      }
    },
    location: {
      type: DataTypes.INTEGER,
      references: {
        model: 'restaurant',
        key: 'id'
      }
    }  
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'menu',
  }
);

module.exports = Menu;