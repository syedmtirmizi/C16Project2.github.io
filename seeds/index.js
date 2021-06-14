const seedUser = require('./user-seeds');
const seedRestaurants = require('./restaurant-seeds');
const seedMenu = require('./menu-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: false });
    console.log('--------------');
    await seedUser();
    console.log('--------------');
  
    await seedRestaurants();
    console.log('--------------');
  
    await seedMenu();
    console.log('--------------');

    process.exit(0);
  };
  
  seedAll();