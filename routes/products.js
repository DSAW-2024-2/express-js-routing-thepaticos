const express = require('express');
const router = express.Router();

let products = [];

router.get('/', (req, res) => {
  res.json(products);
});

router.post('/', (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
});


router.put('/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (product) {
    Object.assign(product, req.body);
    res.json(product);
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
});

router.delete('/:id', (req, res) => {
  products = products.filter(p => p.id !== req.params.id);
  res.status(204).send();
});

module.exports = router;
