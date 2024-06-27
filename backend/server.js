// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const inventory = [
  { id: 1, name: 'Product A', quantity: 100 },
  { id: 2, name: 'Product B', quantity: 200 },
];

const purchases = [
  { id: 1, item: 'Product A', quantity: 10, price: 100 },
  { id: 2, item: 'Product B', quantity: 5, price: 200 },
];

const sales = [
  { id: 1, item: 'Product A', quantity: 2, price: 120 },
  { id: 2, item: 'Product B', quantity: 1, price: 220 },
];

const payments = [
  { id: 1, date: '2024-01-01', amount: 100 },
  { id: 2, date: '2024-01-02', amount: 200 },
];

const receipts = [
  { id: 1, date: '2024-01-01', amount: 120 },
  { id: 2, date: '2024-01-02', amount: 220 },
];

app.get('/api/inventory', (req, res) => {
  res.json(inventory);
});

app.get('/api/purchases', (req, res) => {
  res.json(purchases);
});

app.get('/api/sales', (req, res) => {
  res.json(sales);
});

app.get('/api/payments', (req, res) => {
  res.json(payments);
});

app.get('/api/receipts', (req, res) => {
  res.json(receipts);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
