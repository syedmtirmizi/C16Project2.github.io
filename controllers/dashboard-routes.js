
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Restaurant, Menu, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
	res.render('dashboard', {
			loggedIn: true
	});
})

router.get( '/new-location', (req, res ) => {
	res.render('newlocation', {
		loggedIn: true
	});
});

router.get( '/new-menu', (req, res ) => {
	res.render('newmenu', {
		loggedIn: true
	});
});

router.get("/all-menu-items", (req, res) => {
    Menu.findAll({
		// where: {
		// 	user_id: req.session.user_id
		// },
      attributes: ["id", "description", "ingredients", "price", "location"],
    })
      .then((dbMenuData) => {
        // pass a single post object into the homepage template
        const menu = dbMenuData.map((menu) => menu.get({ plain: true }));
        res.render("allmenu", { menu, loggedIn: true });
      })
      //{ menu, loggedIn: true });
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/edit/:id', (req, res) => {
    Menu.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['description', 
        'ingredients', 
        'price', 
        'location'
      ]
    }).then(dbMenuData => {
      if (dbMenuData) {
      const menu = dbMenuData.get({ plain: true });
  
      res.render("edit-menu", {
      menu,
      loggedIn: true
      })
    } else {
      res.status(404).end();
    }
  })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    });



router.get( '/location-menu', (req, res ) => {
  Restaurant.findAll({
    include: [
      {
        model: Menu,
        attributes: ['id', 'description', 'ingredients', 'price', 'location' ]
      }
    ]
  })
	.then(dbRestaurantData => {
		// pass a single post object into the homepage template
		const restaurants = dbRestaurantData.map(restaurant => restaurant.get({ plain: true }));
		res.render('locationmenu', { restaurants, loggedIn: true });
	})
	.catch(err => {
		console.log(err);
		res.status(500).json(err);
	});
});

router.get( '/edit', (req, res ) => {
	res.render('edit-menu', {
		loggedIn: true
	});
});

router.get( '/single-location-menu/:id', (req, res ) => {
  Menu.findAll({
    where: {
      location: req.params.id
    }
  })
  .then((dbMenuData) => {
    const menu = dbMenuData.map((menu) => menu.get({ plain: true }));
    res.render("single-location-menu", { menu, loggedIn: true });
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get( '/close-location', (req, res ) => {
  Restaurant.findAll({
    include: [
      {
        model: Menu,
        attributes: ['id', 'description', 'ingredients', 'price', 'location' ]
      }
    ]
  })
	.then(dbRestaurantData => {
		// pass a single post object into the homepage template
		const restaurants = dbRestaurantData.map(restaurant => restaurant.get({ plain: true }));
		res.render('closelocation', { restaurants, loggedIn: true });
	})
	.catch(err => {
		console.log(err);
		res.status(500).json(err);
	});
});


router.get('/confirm-closing/:id', (req, res) => {
  Restaurant.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 
      'address', 
    ]
  }).then(dbRestaurantData => {
    if (dbRestaurantData) {
    const restaurant = dbRestaurantData.get({ plain: true });

    console.log(restaurant)
    res.render('closelocationconfirm', {
		restaurant,
    loggedIn: true
    });
  } else {
    res.status(404).end();
  }
})
.catch(err => {
  res.status(500).json(err);
});
});


module.exports = router;