const { User, Recipe, Ingredient, Step, Comment } = require('../models');

const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate({
                        path: 'recipes',
                        model: 'Recipe',
                        populate: {
                            path: 'ingredients',
                            model: 'Ingredient',
                        },
                        populate: {
                            path: 'steps',
                            model: 'Step',
                        },
                        populate: {
                            path: 'comments',
                            model: 'Comment',
                        },
                    });

                return userData;
            }
            throw new AuthenticationError('Not logged in');
        },
        user: async (parent, { _id }) => {
            const user = User.findOne({ _id }).populate({
                path: 'recipes',
                model: 'Recipe',
                populate: {
                    path: 'ingredients',
                    model: 'Ingredient',
                },
                populate: {
                    path: 'steps',
                    model: 'Step',
                },
                populate: {
                    path: 'comments',
                    model: 'Comment',
                },
            });
            return user;
        },
        users: async () => {
            const users = User.find()
                .sort({ createdAt: -1 })
                .populate({
                    path: 'recipes',
                    model: 'Recipe',
                    populate: {
                        path: 'ingredients',
                        model: 'Ingredient',
                    },
                    populate: {
                        path: 'steps',
                        model: 'Step',
                    },
                    populate: {
                        path: 'comments',
                        model: 'Comment',
                    },
                });
            return users;
        },
        recipe: async (parent, { _id }) => {
            const recipe = recipe.findOne({ _id }).populate('ingredients').populate('steps').populate('comments');
            return recipe;
        },
        recipes: async () => {
            const recipes = recipe
                .find()
                .sort({ createdAt: -1 })
                .populate('ingredients')
                .populate('steps')
                .populate('comments');
            return recipes;
        },
        ingredients: async () => {
            const ingredients = Ingredient.find().sort({ createdAt: -1 });
            return ingredients;
        },
        steps: async () => {
            const steps = Step.find().sort({ createdAt: -1 });
            return steps;
        },
        comments: async () => {
            const comments = Comment.find().sort({ createdAt: -1 });
            return comments;
        },
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect Email');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect Password');
            }

            const token = signToken(user);

            return { token, user };
        },
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        // addRecipe: async (parent, { recipeName, description, note, ingredients, steps }, context) => {
        //     if (context.user) {
        //         const recipe = new Recipe({ recipeName, description, note, ingredients, steps });

        //         await Recipe.create(recipe);

        //         await User.findByIdAndUpdate(context.user._id, {
        //             $push: { recipes: recipe },
        //         });

        //         return recipe;
        //     }

        //     throw new AuthenticationError('Not logged in');
        // },
        addRecipe: async (_, { RecipeInput: { recipeName, description, notes, public } }) => {
            const newRecipe = new Recipe({
                recipeName,
                description,
                notes,
                public,
            });
            await newRecipe.save();
            return newRecipe;
        },
        addIngredient: async (_, { IngredientInput: { recipeId, ingredientName, measurement, quantity } }) => {
            // find the recipe by id
            console.log('here 1');
            const recipe = await Recipe.findById(recipeId);
            console.log('here 2');

            // check if the transaction exists
            if (recipe) {
                console.log('here 3');
                // if exists, push datas into items of transaction
                recipe.ingredients.unshift({
                    ingredientName,
                    measurement,
                    quantity,
                });
            } else throw new Error('recipe does not exist');
            await recipe.save();
            return recipe;
            console.log('here 4');
            console.log(recipe.ingredients[0]);
        },
        addStep: async (_, { StepInput: { recipeId, stepNumber, stepText } }) => {
            // find the recipe by id
            const recipe = await Recipe.findById(recipeId);

            // check if the transaction exists
            if (recipe) {
                // if exists, push datas into items of transaction
                recipe.steps.unshift({
                    stepNumber,
                    stepText,
                });
            } else throw new Error('recipe does not exist');
        },
        addComment: async (_, { CommentInput: { recipeId, commentText, commentAuthor } }) => {
            // find the recipe by id
            const recipe = await Recipe.findById(recipeId);

            // check if the transaction exists
            if (recipe) {
                // if exists, push datas into items of transaction
                recipe.comments.unshift({
                    commentText,
                    commentAuthor,
                });
            } else throw new Error('recipe does not exist');
        },
        // addIngredient: async (parent, { recipeId, ingredientName, measurement, quantity }) => {
        //     return Recipe.findOneAndUpdate(
        //         { _id: recipeId },
        //         {
        //             $addToSet: { ingredients: { ingredientName, measurement, quantity } },
        //         },
        //         {
        //             new: true,
        //             runValidators: true,
        //         }
        //     );
        // },
        // addStep: async (parent, { recipeId, stepNumber, stepText }) => {
        //     return Recipe.findOneAndUpdate(
        //         { _id: recipeId },
        //         {
        //             $addToSet: { steps: { stepNumber, stepText } },
        //         },
        //         {
        //             new: true,
        //             runValidators: true,
        //         }
        //     );
        // },
        // addComment: async (parent, { recipeId, commentText }) => {
        //     return Recipe.findOneAndUpdate(
        //         { _id: recipeId },
        //         {
        //             $addToSet: { comments: { commentText } },
        //         },
        //         {
        //             new: true,
        //             runValidators: true,
        //         }
        //     );
        // },
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
