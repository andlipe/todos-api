const express = require('express')
const app = express();
const routes = require('./routes')
require('dotenv').config()
const connection = require('./database')
let port = process.env.PORT || 3545

console.log(process.env.MONGO_HOST)


app.use(express.json())
app.use(routes)
app.listen(3545)