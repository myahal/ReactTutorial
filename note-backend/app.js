const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const notesRouter = require('./controllers/notes')


app.use(bodyParser.json())

app.use('/api/notes', notesRouter)

module.exports = app