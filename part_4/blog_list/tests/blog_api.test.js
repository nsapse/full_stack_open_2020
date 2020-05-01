const mongoose = require('mongoose')
    const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')

const api = supertest(app)

const initialBlogs = [
    {
          _id: "5a422a851b54a676234d17f7",
          title: "React patterns",
          author: "Michael Chan",
          url: "https://reactpatterns.com/",
          likes: 7,
          __v: 0
      }, {
          _id: "5a422aa71b54a676234d17f8",
          title: "Go To Statement Considered Harmful",
          author: "Edsger W. Dijkstra",
          url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
          likes: 5,
          __v: 0
        }
    ]

beforeEach(async () => {

    await Blog.deleteMany({})
    
    let blogObject = new Blog(initialBlogs[0])
    await blogObject.save()

    blogObject = new Blog(initialBlogs[1])
    await blogObject.save()
})

test('blogs are returned as json', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('all blogs are returned', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body).toHaveLength(initialBlogs.length)
})

test('a blog can be posted', async () => {
    const newBlog = {
          _id: "5a422b3a1b54a676234d17f9",
          title: "Canonical string reduction",
          author: "Edsger W. Dijkstra",
          url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
          likes: 12,
          __v: 0
      }
      await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)
    
    const response = await api.get('/api/blogs')
    const titles   = response.body.map( r => r.title)
 
    expect(response.body).toHaveLength(initialBlogs.length + 1)
    expect(titles).toContain('Canonical string reduction')
 })

test('a blog\'s id is defined as id', async () => {
    const response = await api.get('/api/blogs/')
    expect(response.body[0].id).toBeDefined()
})

test('a blog defaults to zero likes when posted without a value', async () => {
    const newBlog = {
          _id: "5a422b3a1b54a676234d17f9",
          title: "Canonical string reduction",
          author: "Edsger W. Dijkstra",
          url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
      }
      await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)

    const response = await api.get('/api/blogs')
    const likes = response.body.map(r => r.likes)
    expect(likes[2]).toBe(0)
})

test('posting blogs without a title will result in 400 "bad request" errors', async () => {
    const newBlog = {
          _id: "5a422b3a1b54a676234d17f9",
          author: "Edsger W. Dijkstra",
          url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
          likes: 12,
          __v: 0
      }
      await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(400)
})

test('posting blogs without a url will result in 400 "bad request" errors', async () => {
    const newBlog = {
          _id: "5a422b3a1b54a676234d17f9",
          author: "Edsger W. Dijkstra",
          title: "Canonical string reduction",
          likes: 12,
          __v: 0
      }
      await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(400)
})

describe('When deleting blogs', () => {
    test('A single blog  can be deleted', async () => {
        await api.delete('/api/blogs/5a422a851b54a676234d17f7')
            .expect(204)
        
        const response = await api.get('/api/blogs')
        expect(response.body).toHaveLength(initialBlogs.length - 1)
    })
})

describe('when updating blog posts', () => {
    test('the likes can be updated with a PUT request', async () => {
        await api.put('/api/blogs/5a422a851b54a676234d17f7')
            .send({likes: 666})
        
        const response = await api.get('/api/blogs/5a422a851b54a676234d17f7')
        console.log('response to get query: ', response.body);
        expect(response.body.likes).toBe(666)
    })
})


afterAll(() => { 
    mongoose.connection.close()
}) 