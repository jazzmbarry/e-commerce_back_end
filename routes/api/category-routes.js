const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll()
  .then(dbCatData => res.json(dbCatData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  })
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(dbCatData => res.json(dbCatData))
});

router.post('/', (req, res) => {
  Category.create({
    id: req.body.id,
    category_name: req.body.category_name
  })
  .then(dbCatData => res.json(dbCatData))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
});

router.put('/:id', (req, res) => {
  Category.update((
    req.body.id,
    req.body.category_name
  ), 
  {
    where: {
      id: req.params.id
    }
  })
  .then(dbCatData => res.json(dbCatData))
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbCatData => res.json(dbCatData))
});

module.exports = router;
