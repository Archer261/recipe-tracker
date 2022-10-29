const { User, Recipe } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({});
        },

        user: async (parent, { username }) => {
            return await User.findOne({ username: username });
        },
        recipes: async (parent, { username }) => {
            return await Recipe.find({});
        },
        recipe: async (parent, { recipeId }) => {
            return await Recipe.findOne({ _id: recipeId });
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            return User.create({ username, email, password });
        },
        addRecipe: async (parent, { title, description, note }) => {
            return Recipe.create({ title, description, note });
        },
        addIngredient: async (parent, { recipeId, ingredientName, measurement, quantity }) => {
            return Recipe.findOneAndUpdate(
                { _id: recipeId },
                {
                    $addToSet: { ingredients: { ingredientName, measurement, quantity } },
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },
        addStep: async (parent, { recipeId, stepNumber, stepText }) => {
            return Recipe.findOneAndUpdate(
                { _id: recipeId },
                {
                    $addToSet: { steps: { stepNumber, stepText } },
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },
        addComment: async (parent, { recipeId, commentText }) => {
            return Recipe.findOneAndUpdate(
                { _id: recipeId },
                {
                    $addToSet: { comments: { commentText } },
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },
        removeRecipe: async (parent, { recipeId }) => {
            return Recipe.findOneAndDelete({ _id: thoughtId });
        },
        removeIngredient: async (parent, { recipeId, ingredientId }) => {
            return Recipe.findOneAndUpdate(
                { _id: recipeId },
                { $pull: { ingredients: { _id: ingredientId } } },
                { new: true }
            );
        },
        removeStep: async (parent, { recipeId, stepId }) => {
            return Recipe.findOneAndUpdate({ _id: recipeId }, { $pull: { steps: { _id: stepId } } }, { new: true });
        },
        removeComment: async (parent, { recipeId, commentId }) => {
            return Recipe.findOneAndUpdate(
                { _id: recipeId },
                { $pull: { comments: { _id: commentId } } },
                { new: true }
            );
        },
    },
};

module.exports = resolvers;
