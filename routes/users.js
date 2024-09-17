const express = require('express');
const router = express.Router();
const data = require('../data/users.json');

let users = data;

router.get('/', (req, res) => {
  res.json(users);
});

router.post('/', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

router.get('/:id?', (req, res) => {
  const id = parseInt(req.params.id);
  if (typeof(id)=="number") {
    res.json(users[id]);
  } else {
    res.status(404).json({ message: 'Usuario no encontrado' });
  }
});

router.put('/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (user) {
    Object.assign(user, req.body);
    res.json(user);
  } else {
    res.status(404).json({ message: 'Usuario no encontrado' });
  }
});

router.delete('/:id', (req, res) => {
  users = users.filter(u => u.id !== req.params.id);
  res.status(204).send();
});

module.exports = router;
