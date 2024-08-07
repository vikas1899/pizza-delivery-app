const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = process.env.MONGODB_URL;

if (!mongoURL) {
    console.error('MONGODB_URL is not defined in .env file');
    process.exit(1);
}

mongoose.connect(mongoURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => {
        console.log('MongoDB connection successful');
    })
    .catch((err) => {
        console.error('MongoDB connection failed', err);
    });

module.exports = mongoose;
