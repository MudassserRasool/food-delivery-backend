const express = require('express');
const { placeOrder, getOrders, deleteOrder } = require('../controllers/orderControllers.js');

const router = express.Router();

router.post('/', placeOrder);
//
router.delete('/:id',deleteOrder );

// export default router;

module.exports = router;
