const express = require('express');
const router = express.Router();
const data = require('../data/orders.json');

let orders = data;

router.get('/', (req, res) => {
  res.json(orders);
});

router.post('/', (req, res) => {
  const newOrder = req.body;
  orders.push(newOrder);
  res.status(201).json(newOrder);
});

router.get('/:id', (req, res) => {
  const order = orders.find(o => o.id === req.params.id);
  if (order) {
    res.json(order);
  } else {
    res.status(404).json({ message: 'Pedido no encontrado' });
  }
});

module.exports = router;
