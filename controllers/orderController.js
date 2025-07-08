const Order = require('../models/Order');
const Food = require('../models/Food');

// User places order
exports.placeOrder = async (req, res) => {
  try {
    const { userId, items } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'Order must contain at least one item' });
    }

    // Calculate total
    let total = 0;
    for (const item of items) {
      const food = await Food.findById(item.foodId);
      if (!food) return res.status(404).json({ error: `Food item not found: ${item.foodId}` });
      total += food.price * item.quantity;
    }

    const order = await Order.create({ userId, items, totalAmount: total });
    res.status(201).json({ message: 'Order placed successfully', order });

  } catch (err) {
    console.error('❌ Place Order Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get all orders (for admin/restaurant)
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('userId', 'name email').populate('items.foodId', 'name price');
    res.json(orders);
  } catch (err) {
    console.error('❌ Get Orders Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Update order status to Delivered
exports.markDelivered = async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findById(orderId);
    if (!order) return res.status(404).json({ error: 'Order not found' });

    order.status = 'Delivered';
    await order.save();

    res.json({ message: 'Order marked as delivered', order });
  } catch (err) {
    console.error('❌ Delivery Update Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};
