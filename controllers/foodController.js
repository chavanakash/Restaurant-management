const Food = require('../models/Food');

// Add new food (admin)
exports.addFood = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;

    if (!name || !price) {
      return res.status(400).json({ error: 'Name and price are required' });
    }

    const food = new Food({ name, price, description, category });
    await food.save();

    res.status(201).json({ message: 'Food added', food });
  } catch (err) {
    console.error('❌ Add Food Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get all foods
exports.getFoods = async (req, res) => {
  try {
    const foods = await Food.find().sort({ createdAt: -1 });
    res.json(foods);
  } catch (err) {
    console.error('❌ Get Foods Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};
