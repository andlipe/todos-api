const express = require('express')
const app = express();
const routes = require('./routes')
require('dotenv').config()
const connection = require('./database')
const cors = require('cors')
let port = process.env.PORTA || 3545


app.use(cors())
app.use(express.json())
app.use(routes)
app.listen(port)