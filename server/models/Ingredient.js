const { Schema, model } = require('mongoose');

const indgredientSchema = new Schema({
    ingredientName: {
        type: String,
        required: true,
    },
    measurement: {
        type: String,
    },
    quantity: {
        type: Number,
        required: true,
    },
    recipe: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
        required: true,
    },
});

const Ingredient = model('Ingredient', indgredientSchema);

module.exports = Ingredient;
