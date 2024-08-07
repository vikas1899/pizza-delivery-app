const mongoose = require('mongoose');

const pizzaSchema = mongoose.Schema({
    name: { type: String, required: true },
    varients: [],
    prices: [],
    category: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
}, {
    timestamps: true
});

const Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = Pizza;
