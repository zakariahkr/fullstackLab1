const mongoose = require('mongoose');

const schemaDishes = new mongoose.Schema({
    name: {type: String, unique: true, required: true},
    ingredients: { type: [String], required: true },
    preparationSteps: { type: [String], required: true },
    cookingTime: { type: String, required: true },
    origin: { type: String, required: true },
    difficulty: { type: String, required: true } //custom field
})

const Dish = mongoose.model('Dish', schemaDishes);
module.exports = Dish;