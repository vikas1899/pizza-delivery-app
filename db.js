const mongoose = require('mongoose');
require('dotenv').config(); // Ensure dotenv is configured

const mongoURL = process.env.MONGODB_URL;

// Check if the MongoDB URL is defined
if (!mongoURL) {
    console.error('MONGODB_URL is not defined in .env file');
    process.exit(1); // Exit the process if the URL is not defined
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
