const express = require('express');
// import { placeOrder,deleteOrder } from '../controllers/orderControllers.js';
// import instead of es6
// import { placeOrder,deleteOrder } from '../controllers/orderControllers.js';
const { placeOrder, getOrders, deleteOrder } = require('../controllers/orderControllers.js');

const router = express.Router();

router.post('/', placeOrder);

//
router.delete('/:id',deleteOrder );

// export default router;

module.exports = router;
