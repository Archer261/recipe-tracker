const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/recipe-db',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    // (err, client) => {
    //     let db = client.db();
    //     db.collection('recipe').deleteMany({});
    //     db.collection('recipe').insertMany(data, (err, res) => {
    //         if (err) {
    //             return console.error(err);
    //         }
    //         console.log(res.ops);
    //     });
    // }
);

module.exports = mongoose.connection;
