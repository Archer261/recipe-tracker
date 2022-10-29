const { Schema, model } = require('mongoose');

const stepSchema = new Schema({
    stepNumber: {
        type: Number,
        required: true,
    },
    stepText: {
        type: String,
        required: true,
    },
    recipe: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
        required: true,
    },
});

const Step = model('Step', stepSchema);

module.exports = Step;
