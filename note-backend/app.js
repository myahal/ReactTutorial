const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const notesRouter = require('./controllers/notes')
app.use('/api/notes', notesRouter)

module.exports = app