const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [
    {
      name: String,
      quantity: Number,
      price: Number,
    },
  ],
  totalPrice: Number,
  orderDate: { type: Date, default: Date.now },
  address: String, // Add the address field
  phoneNumber: String, // Add the phoneNumber field
  userName: String,    // Add the userName field
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
