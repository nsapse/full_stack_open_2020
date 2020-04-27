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

module.exports = blogRouter