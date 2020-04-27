const blogRouter = require('express').Router()
const Blog = require('../models/blog')

blogRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})
  if (blogs)
    response.json(blogs)
})

blogRouter.post('/', async (request, response) => {
  const blog_entry = new Blog(request.body);

  const savedBlog = await blog_entry.save()
  response.status(201).json(savedBlog.toJSON());
  
  })

blogRouter.delete('/:id', async (request, response) => {
  await Blog.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

module.exports = blogRouter