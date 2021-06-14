const router = require('express').Router();
const { Restaurant, Menu } = require('../../models');

//restaurant get all 

router.get('/', (req, res) => {
  Restaurant.findAll({

    include: [
      {
        model: Menu,
        attributes: ['id', 'description', 'ingredients', 'price', 'location' ]
      }
    ]
  })
  .then(dbRestaurantData => res.json(dbRestaurantData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//restaurant by id 

router.get('/city/:city', (req, res) => {
  Restaurant.findOne({
    where: {
      city: req.params.city
    },
    include: [
      {
        model: Menu,
        attributes: ['id', 'description', 'ingredients', 'price' ]
      }
    ]
  })
    .then(dbRestaurantData => {
      if (!dbRestaurantData) {
        res.status(404).json({ message: 'No Restaurant found with this id' });
        return;
      }
      res.json(dbRestaurantData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Restaurant.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Menu,
        attributes: ['id', 'description', 'ingredients', 'price' ]
      }
    ]
  })
    .then(dbRestaurantData => {
      if (!dbRestaurantData) {
        res.status(404).json({ message: 'No Restaurant found with this id' });
        return;
      }
      res.json(dbRestaurantData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// add a restaurant
router.post('/', (req, res) => {
  Restaurant.create({
    city: req.body.city,
    address: req.body.address,
    phone: req.body.phone,
    email: req.body.email,
    user_id: req.body.user_id
  })
  .then(dbRestaurantData => res.json(dbRestaurantData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// //update a restaurant
router.put('/:id' , (req, res) => {
  Restaurant.update(
    {     
      address: req.body.address,
      city: req.body.city
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(dbRestaurantData => {
    if (!dbRestaurantData) {
      res.status(404).json({ message: 'No Restaurant found with this id' });
      return;
    }
    res.json(dbRestaurantData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//delete a Restaurant
router.delete('/:id', (req, res) => {
  Restaurant.destroy({
    where: {
      id:req.params.id
    }
  })
  .then(dbRestaurantData => {
    if (!dbRestaurantData) {
      res.status(404).json({ message: 'No Restaurant found with this id' });
      return;
    }
    res.json(dbRestaurantData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


module.exports = router;