//const sequelize = require('../config/connection');
const { Restaurant } = require("../models");

//id, Restaurant number, restaurant address

//id
//restaurant_number:
//address
//user_id 

const restaurantdata = [
  {
    Id: 1,
    city:"Toronto",
    address: "123 function rd",
    phone: '416-614-1641' ,
    email: "owner@hmbrgr.com",
    user_id: 1
  },
  {
    Id: 2,
    city:"Milton",
    address: "456 method crt, Milton Ontario",
    phone: '905-614-1641',
    email: 'manager@hmbrgr.com',
    user_id: 1

  },
  {
    Id: 3,
    city:"London",
    address: "890 Variable Blvd, London Ontario",
    phone: '514-614-1641',
    email: 'Teamlead@hmbrgr.com',
    user_id: 1 
  },
  {
    Id: 4,
    city:"Mississauga",
    address: "246 Array Way",
    phone: '905-509-1641',
    email: 'socialmedia@hmbrgr.com',
    user_id: 1
  }
];

const seedLocation = () => Restaurant.bulkCreate(restaurantdata);

module.exports = seedLocation;