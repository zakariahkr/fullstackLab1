const express = require('express');
const Dish = require('../models/Dishes.js');

const router = express.Router();

// GET/Return a JSON array with all dishes
router.get('/', async (req, res) => {
    try {
        const dishes = await Dish.find();
        res.json(dishes);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// GET/Return a dish by name. Return 404 if it doesn't exist
router.get('/:name', async (req, res) => {
    try {
        const dishName = await Dish.findOne({name: req.params.name});
        if (!dishName) return res.status(404).json({message:'Dish does not exist'})
        res.json(dishNema);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// POST/Add a new dish. Return 201 if successful, or 409 if it already exists
router.post('/', async (req, res) => {
    try {
        const newDish = new Dish(req.body);
        await newDish.save();
        res.status(201).json(newDish)
    } catch (err) {
        if (err.code === 11000) return res.status(409).json({message:'Dish already exists'});
        res.status(400).json({message: err.message});
    }
});

// PUT/ Update an existing dish. Return 404 if it doesn't exist
router.put('/:id', async (req, res) => {
  try {
    const updateDish = await Dish.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updateDish) return res.status(404).json({message:'Dish does not exist'});
    res.json(updateDish);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE/Delete a dish. Return 404 if it doesn't exist
router.delete('/:id', async (req, res) => {
  try {
    const deleteDish = await Dish.findByIdAndUpdate(req.params.id);
    if (!deleteDish) return res.status(404).json({message:'Dish does not exist'});
    res.json({message:'Dish deleted successfully'});
  } catch (err) {
    res.status(400).json({message: err.message});
  }
});

module.exports = router;

