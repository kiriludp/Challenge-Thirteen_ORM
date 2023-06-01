const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


router.get('/', async (req, res) => {
  // find all categories
  try {
    const categroyData = await Category.findAll(
      {
        // Associated Products
        include:  {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    });
    res.status(200).json(categroyData)
  } catch (err) {
    res.status(500).json(err);
  }
});

  
  
  // Associated Products

  model: Product,
  attributes: [ 'id', 'product_name', 'price', 'stock', 'category_id']
}
})
.then(dbCatData => {
  if(!dbCatData) {
    res.status(404).json({message: '<h2>No categories found (*´ー)ﾉ(ノд`) </h2>'});
    return;
  }
  res.json(dbCatData);
})
.catch(err => {
  console.log(err);
  res.status(500).json(err)
});
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    },
  // be sure to include its associated Products
  include: {
    model: Product,
    attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
  }
})
  .then(dbCatData => {
    if(!dbCatData) {
      res.status(404).json({message: 'No categories found'});
      return;
    }
    res.json(dbCatData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;