const { Schema, model } = require('mongoose');

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
    ingredients: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Ingredient',
        },
    ],
    steps: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Step',
        },
    ],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment',
        },
    ],
});

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;
