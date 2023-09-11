require('dotenv').config()
const uri = process.env.DATABASE_URL
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

mongoose.connect(uri, {
  useNewUrlParser: true,
})

const db = mongoose.connection

db.once('open', () => console.log('Connected to database'))

app.listen(3000, () => console.log('Server started'))
