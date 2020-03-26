const mongoose = require('mongoose')


module.exports = 
mongoose.connect(`mongodb://${process.env.MONGO_HOST}:27017/${process.env.MONGO_DB}?authSource=admin`, {
        user: process.env.MONGO_USER,
        pass: process.env.MONGO_PASS,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })