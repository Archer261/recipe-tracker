const db = require('../config/connection');
const { Model1, Model2 } = require('../models');
const model1Seeds = require('./model1Seeds.json');
const model2Seeds = require('./model2Seeds.json');

db.once('open', async () => {
    try {
        await Model1.deleteMany({});
        await Model2.deleteMany({});

        await User.create(userSeeds);

        for (let i = 0; i < thoughtSeeds.length; i++) {
            const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
            const user = await User.findOneAndUpdate(
                { username: thoughtAuthor },
                {
                    $addToSet: {
                        thoughts: _id,
                    },
                }
            );
        }
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('all done!');
    process.exit(0);
});
