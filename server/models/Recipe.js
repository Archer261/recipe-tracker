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
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
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
        default:
            'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/01/31/0/FNK_ONEPOT_LEMON_RICOTTA_SPAGHETTONI_H_f_s4x3.jpg.rend.hgtvcom.266.200.suffix/1643665133276.jpeg',
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
