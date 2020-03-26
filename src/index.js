const express = require('express')
const app = express();
const mongoose = require('mongoose')
const routes = require('./routes')
let port = 3545



mongoose.connect('mongodb+srv://andremoura:king2019@cluster0-ni3q8.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
app.use(express.json())
app.use(routes)
app.listen(3545)