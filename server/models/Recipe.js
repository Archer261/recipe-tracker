const { Schema, model } = require('mongoose');
// const Ingredient = require('./Ingredient');
// const Step = require('./Step');
// const Comment = require('./Comment');

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
});

const stepSchema = new Schema({
    stepNumber: {
        type: Number,
        required: true,
    },
    stepText: {
        type: String,
        required: true,
    },
});

const commentSchema = new Schema({
    commentAuthor: {
        type: String,
        required: true,
    },
    commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
});

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
    ingredients: [indgredientSchema],
    steps: [stepSchema],
    comments: [commentSchema],
});

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;
