const blogRouter = require('express').Router()
const jwt = require('jsonwebtoken')
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
  const body = request.body
  const token = request.token 
  if (!token) {
    return response.status(401).json({ 
      error: 'token missing'
     })
  }
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!decodedToken.id){
    return response.status(401).json({ 
      error: 'token invalid'
     })
  }

  const user = await User.findById(decodedToken.id)
 
  const newBlog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
    user: user._id
  })

  const savedBlog = await newBlog.save()
  user.blogs = user.blogs.concat(savedBlog._id)
  await user.save()

  response.status(201).json(savedBlog.toJSON())
})

blogRouter.delete('/:id', async (request, response) => {
  const blog_entry = await Blog.findById(request.params.id)
  const user_token = request.token
  if (!user_token) {
    return response.status(401).json({
      error: 'token missing'
    })
  }
  decodedToken = jwt.verify(user_token, process.env.SECRET)
  if (!decodedToken.id) {
    return response.status(401).json({
      error: 'token ID invalid'
    })
  }
  
  if (blog_entry.user.toString() != decodedToken.id.toString()) {
    return response.status(401).json({
      error: 'improper user - notes can only be deleted by the user that created them'
    })
  }

  const user = await User.findById(decodedToken.id)
  await Blog.findByIdAndDelete(request.params.id)
  user.blogs = user.blogs.filter(blog => blog.toString() != request.params.id)
  await user.save() 
  response.status(204).end()

})

blogRouter.put('/:id', async (request, response) => {
  const body = request.body
  const new_likes = body.likes
  
  const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, { "likes": new_likes }, { new: true }) 
  response.json(updatedBlog.toJSON()) 

})


module.exports = blogRouter