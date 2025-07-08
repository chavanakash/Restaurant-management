const express = require('express');
const { placeOrder, getAllOrders, markDelivered } = require('../controllers/orderController');
const router = express.Router();

router.post('/', placeOrder);               // place order
router.get('/', getAllOrders);              // get all orders
router.put('/:id/deliver', markDelivered);  // mark order delivered

module.exports = router;
