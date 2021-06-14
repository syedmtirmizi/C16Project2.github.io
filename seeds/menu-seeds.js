//const sequelize = require('../config/connection');
const { Menu } = require('../models');

//id, description, ingredients, price, location (store)

// ID
// product_name
// ingredients
// price

const menudata = [
  {
    id: 1,
    description: 'hamBurger',
    ingredients: '1 beef patty, ketchup, mustard, onions, pickles',
    price: 2.49,
    location: 2
  },
  {
    id: 2,
    description: 'cheeseBurger',
    ingredients: ' 1 beef patty,ketchup, mustard, onions, pickles cheese',
    price: 2.89,
    location: 2
  },
  {
    id: 3,
    description: 'grandStan',
    ingredients:
      '2 beef patties,special sauce, shredded lettuce, onions, pickles, cheese',
    price: 4.49,
    location: 1
  },
  {
    id: 4,
    description: '3/4 - 1 lb aka the fraction burger',
    ingredients: '1 1/4lbs beef patty, ketchup, mustard, onions, pickles',
    price: 4.49,
    location: 3
  },
  {
    id: 5,
    description: 'improbableBurger',
    ingredients: 'veggy patty, mayo, red onions, pickles, leaf lettuce',
    price: 5.39,
    location: 3
  },
  {
    id: 6,
    description: 'isChicken',
    ingredients: 'formed chicken patty, mayo, lettuce',
    price: 4.49,
    location: 1
  },
  {
    id: 7,
    description: 'isChickenNuggets',
    ingredients: ' an array [] of 6 deepfried chicken tenders',
    price: 4.79,
    location: 2
  },
  {
    id: 8,
    description: 'functionFries()',
    ingredients: 'golden friend potatoes, ligtly salted',
    price: 1.89,
    location: 2
  },
  {
    id: 9,
    description: 'sideSalad',
    ingredients:
      'romain lettuce, iceberg lettuce, spinach, cherry tomatoes, onions',
    price: 2.19,
    location: 4
  },
  {
    id: 10,
    description: 'iceCream',
    ingredients: 'vanilla flavored soft serve with spoon',
    price: 3.49,
    location: 4
  }
];

const seedMenu = () => Menu.bulkCreate(menudata);

module.exports = seedMenu;
