const express = require('express');
const router = express.Router();
const data = require('../data/orders.json');

let orders = data;

router.get('/', (req, res) => {
  res.json(orders);
});

router.get('/:id?', (req, res) => {
  const id = parseInt(req.params.id);
  if (typeof(id)=="number") {
    res.json(orders[id]);
  } else {
    res.status(404).json({ message: 'Pedido no encontrado' });
  }
});

router.post('/', (req, res) => {
  const newOrder = req.body;
  orders.push(newOrder);
  res.status(201).json(newOrder);
});

module.exports = router;
