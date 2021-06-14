const router = require('express').Router();
const sequelize = require('../config/connection');
const { Restaurant, Menu, User } = require('../models');

router.get( '/', (req, res ) => {
    res.render( 'homepage' )    
});

router.get( '/location/:location', (req, res ) => {
  const location = req.params.location
  Restaurant.findOne({
    where: {
      city: location
    },
    include: [
      {
        model: Menu,
        attributes: ['id', 'description', 'ingredients', 'price' ]
      }
    ]
  })
  .then((dbLocationData) => {
    if (!dbLocationData) {
      res.status(404).json({ message: 'No location found with this city' });
      return;
    }
    const location = dbLocationData.get({ plain: true });
    res.render('locations', {
      location,
    });
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get( '/contact', (req, res ) => {
  if (req.session.loggedIn) {
    res.render( 'contact', {
      loggedIn: true
    })
    return;
  }
  res.render( 'contact' )
});

router.get('/newaccount', (req, res) => {
  if (req.session.loggedIn) {
      res.redirect('/dashboard');
      return;
    }
  res.render('newaccount');
});

router.get( '/login', (req, res ) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
      }
    res.render( 'login' )
  });
  
  router.get("/all-menu-items", (req, res) => {
    Menu.findAll({
      attributes: ["id", "description", "ingredients", "price", "location"],
  
    })
      .then((dbMenuData) => {
        // pass a single post object into the homepage template
        const menuItems = dbMenuData.map((menu) => menu.get({ plain: true }));
        res.render("allmenu", { menuItems });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
      });
  });

module.exports = router;