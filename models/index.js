const User = require('./User');
const Restaurant = require('./Restaurant');
const Menu = require('./Menu');
const Contact = require('./contact')

User.hasMany(Restaurant, {
  foreignKey: 'user_id'
});

Menu.belongsTo(Restaurant, {
  foreignKey: 'location',
  onDelete: 'SET NULL'
});

Restaurant.hasMany(Menu, {
  foreignKey: 'location',
  onDelete: 'SET NULL'
});



module.exports = { User, Restaurant, Menu, Contact };