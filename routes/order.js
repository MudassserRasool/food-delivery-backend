const express = require('express');
const Order = require('../models/order');

const router = express.Router();

// Create a new order
router.post('/orders', async (req, res) => {
  try {
    const { items, totalPrice, address } = req.body; // Get the address from the request body
    const order = new Order({ items, totalPrice, address }); // Include the address in the order
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
