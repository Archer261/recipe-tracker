const db = require('../config/connection');
const { User, Recipe, Ingredient, Step, Comment } = require('../models');
//const userSeeds = require('./userSeeds.json');
const recipeSeeds = require('./recipeSeeds');

db.once('open', async () => {
    await User.deleteMany({});
    await Ingredient.deleteMany({});
    await Step.deleteMany({});
    await Comment.deleteMany({});
    await Recipe.deleteMany({});
    await Recipe.create(recipeSeeds);

    console.log('all done!');
    process.exit(0);
});
