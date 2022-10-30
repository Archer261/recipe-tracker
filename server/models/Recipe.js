const { Schema, model } = require('mongoose');
const Ingredient = require('./Ingredient');
const Step = require('./Step');
const Comment = require('./Comment');

const recipeSchema = new Schema({
    recipeName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    notes: {
        type: String,
    },
    rating: {
        type: Number,
    },
    public: {
        type: Boolean,
    },
    ingredients: [Ingredient],
    steps: [Step],
    comments: [Comment],
});

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;
