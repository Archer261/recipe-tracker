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
    },
});

const Ingredient = model('ingredient', indgredientSchema);

module.exports = Ingredient;
