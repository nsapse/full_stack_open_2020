const blogRouter = require('express').Router()
const Blog = require('../models/blog')

blogRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})
  if (blogs)
    response.json(blogs)
})

blogRouter.get('/:id', async (request, response) => {
  const blog = await Blog.findById(request.params.id)
    if (blog) {
      response.json(blog.toJSON())
    } else {
      response.status(404).end()
    }
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

blogRouter.put('/:id', async (request, response) => {
  const body = request.body
  const new_likes = body.likes
  
  const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, { "likes": new_likes }, { new: true }) 
  response.json(updatedBlog.toJSON()) 

})


module.exports = blogRouter