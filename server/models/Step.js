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
    },
});

const Step = model('step', stepSchema);

module.exports = Step;
