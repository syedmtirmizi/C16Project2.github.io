const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const menuRoutes = require('./menu-routes.js');
const restaurantRoutes = require('./restaurant-routes.js');
const contactRoutes = require('./contact-routes');

router.use('/users', userRoutes);
router.use('/menu', menuRoutes);
router.use('/restaurant', restaurantRoutes);
router.use('/contact', contactRoutes);

module.exports = router;