const db = require('../config/connection');
const { User, Recipe } = require('../models');
const userSeeds = require('./userSeeds.json');
const recipeSeeds = require('./recipeSeeds');
const { updateOne } = require('../models/User');

db.once('open', async () => {
    await User.deleteMany({});
    await Recipe.deleteMany({});
    await User.create(userSeeds);
    await Recipe.create(recipeSeeds);

    frank = await User.findOne({ firstName: 'Frank' });

    for await (const doc of Recipe.find()) {
        doc.user = frank._id;
        doc.save();
    }

    console.log('all done!');
    process.exit(0);
});
