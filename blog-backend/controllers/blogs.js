const blogsRouter = require('express').Router()

let blogs = [
    {
        title: 'Blog1',
        author: 'ken',
        url: 'http://blog1.com',
        links: 0
    }
]


blogsRouter.get('/', (request, response) => {
    response.json(blogs)
})

blogsRouter.post('/', (request, response) => {
    const body = request.body
    const blog = {
        title: body.title,
        author: body.author,
        url: body.url,
        links: body.links
    }
    blogs = blogs.concat(blog)

    response.status(201).json(blog)
})

module.exports = blogsRouter