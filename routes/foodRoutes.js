const express = require('express');
const { addFood, getFoods } = require('../controllers/foodController');
const router = express.Router();

router.post('/add', addFood);      // add food
router.get('/', getFoods);         // get all foods

module.exports = router;
