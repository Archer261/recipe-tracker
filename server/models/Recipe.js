const { Schema, model } = require('mongoose');

const recipeSchema = new Schema({
    recipeName: {
        type: String,
        required: true,
    },
    desciption: {
        type: String,
        required: true,
    },
    notes: {
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
    ingredients: [
        {
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
        },
    ],
    steps: [
        {
            stepNumber: {
                type: Number,
                required: true,
            },
            stepText: {
                type: String,
                required: true,
            },
        },
    ],
    comments: [
        {
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
        },
    ],
});

const Recipe = model('recipe', recipeSchema);

module.exports = Recipe;
