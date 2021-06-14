const router = require('express').Router();
const { Menu, Restaurant } = require('../../models');

//Menu get all
router.get('/', (req, res) => {
  Menu.findAll({
    include: [
      // include the Restaurant location here:
      {
        model: Restaurant,
        attributes: ['id', 'address'],
      }
    ]
  })
  .then(dbMenuData => res.json(dbMenuData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//Menu get by ID
router.get('/:id', (req, res) => {
  Menu.findOne({
    where: {
      id: req.params.id
    },
    include: [
      // include the Restaurant location here:
      {
        model: Restaurant,
        attributes: ['id', 'address'],
      }
    ]
  })
  .then(dbMenuData => {
    if (!dbMenuData) {
      res.status(404).json({ message: 'No menu found with this id' });
      return;
    }
    res.json(dbMenuData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//Add a Menu
router.post('/', (req, res) => {
  Menu.create({
    description: req.body.description,
    ingredients: req.body.ingredients,
    price: req.body.price,
    location: req.body.location
  })
  .then(dbMenuData => res.json(dbMenuData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//Update a Menu
router.put('/:id', (req, res) => {
  Menu.update(
    {
      description: req.body.description,
      ingredients: req.body.ingredients,
      price: req.body.price,
      location: req.body.location
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(dbMenuData => {
    if (!dbMenuData) {
      res.status(404).json({ message: 'No menu found with this id' });
      return;
    }
    res.json(dbMenuData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


router.delete('/:id', (req, res) => {
  Menu.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbMenuData => {
    if (!dbMenuData) {
      res.status(404).json({ message: 'No menu found with this id' });
      return;
    }
    res.json(dbMenuData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;