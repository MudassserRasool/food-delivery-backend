const express = require('express');
const User = require('../models/user');

const router = express.Router();

// Create a new user
router.post('/users', async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = new User({ name, email });
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
