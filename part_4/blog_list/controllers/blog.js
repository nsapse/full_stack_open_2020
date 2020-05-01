const blogRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')

blogRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})
    .populate('user')
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
  const users = await User.find({})
  const first_user = users[0]
  blog_entry.user = first_user

  const savedBlog = await blog_entry.save()
  first_user.blogs= first_user.blogs.concat(savedBlog._id)
  await first_user.save()
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