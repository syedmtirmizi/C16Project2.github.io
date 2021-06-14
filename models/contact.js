// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Menu model (table) by extending off Sequelize's Model class
class Contact extends Model {}


// set up fields and rules for Menu model
Contact.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false      
    },
    lastname: {
        type: DataTypes.TEXT,
        allowNull: false   
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false   
    },
    
    address: {
        type: DataTypes.TEXT,
        allowNull: false   
    },
    address2: {
        type: DataTypes.TEXT,
        allowNull: false   
    },
    city: {
        type: DataTypes.TEXT,
        allowNull: false   
    },
    state: {
        type: DataTypes.TEXT,
        allowNull: false   
    },
    zip: {
        type: DataTypes.TEXT,
        allowNull: false   
    }
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'contact',
  }
);

module.exports = Contact;