
const mongoose = require('mongoose');
const Order = require('../models/orderModel.js');

const placeOrder = async (req, res) => {
  try {
    const { items, totalPrice, address, phoneNumber, userName } = req.body;
    const order = new Order({
      items,
      totalPrice,
      address,
      phoneNumber,
      userName,
    });
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching orders' });
  }
};


const deleteOrder = async (req, res) => {
  try {
    // const { id } = req.params;
    const orderId = req.params.orderId;

    // Implement logic to delete the order from the database
    await Order.findOneAndDelete({ _id: orderId });

    res.status(204).send(); // Respond with a 204 No Content status for success
  } catch (error) {
    console.error('Error deleting order:', error);
    res.status(500).json({ error: 'Error deleting order' });
  }
};
module.exports = { placeOrder, getOrders, deleteOrder };