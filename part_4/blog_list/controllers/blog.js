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

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  } 
  return null
}

blogRouter.post('/', async (request, response) => {
  const body = request.body
  const token = getTokenFrom(request)
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

  response.json(savedBlog.toJSON())
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