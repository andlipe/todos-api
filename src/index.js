const express = require('express')
const routes = require('./routes')
require('dotenv').config()
const connection = require('./database')
const cors = require('cors')
const { errors } = require('celebrate')

let port = process.env.PORTA || 3545

const app = express();
app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())
app.listen(port)