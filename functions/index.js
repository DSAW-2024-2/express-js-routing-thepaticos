const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const userRoutes = require('../routes/users');
const productRoutes = require('../routes/products');
const orderRoutes = require('../routes/orders');

app.use('/.netlify/functions/users', userRoutes);
app.use('/.netlify/functions/products', productRoutes);
app.use('/.netlify/functions/orders', orderRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
