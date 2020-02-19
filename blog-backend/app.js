const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const blogsRouter = require('./controllers/blogs')


app.use(bodyParser.json())

app.use('/api/blogs', blogsRouter)

module.exports = app