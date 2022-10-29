const { Schema, model } = require('mongoose');

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
    recipe: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
        required: true,
    },
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;
