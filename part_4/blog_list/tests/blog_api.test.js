const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')
const User = require('../models/user')

const api = supertest(app)

const initialBlogs = [
       {
          title: "Go To Statement Considered Harmful",
          author: "Edsger W. Dijkstra",
          url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
          likes: 5
        }
    ]

const initialUsers = [
    {
    username: "root",
    name: "root",
    password:"password"
}
]

let auth_token = ''
let blog2_id = ''
beforeEach(async () => {

    await Blog.deleteMany({})
    await User.deleteMany({})

    // let blogObject = new Blog(initialBlogs[0])
    // await blogObject.save()

    const new_user = await api.post('/api/users').send({username:initialUsers[0].username, password:initialUsers[0].password})
    const login_response = await api.post('/api/login').send({username:initialUsers[0].username, password:initialUsers[0].password}) 
    auth_token = 'Bearer ' + login_response.body.token
    const blogObject = await api.post('/api/blogs').set('authorization', auth_token).send(initialBlogs[0])
    blog2_id = blogObject.body.id;

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
          title: "Canonical string reduction",
          author: "Edsger W. Dijkstra",
          url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
          likes: 12
      }
      
      await api
        .post('/api/blogs')
        .set('authorization', auth_token)
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
        .set('Authorization', auth_token)
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)

    const response = await api.get('/api/blogs')
    const likes = response.body.map(r => r.likes)
    expect(likes[1]).toBe(0)
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
        .set('authorization', auth_token)
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
        .set('authorization', auth_token)
        .send(newBlog)
        .expect(400)
})

describe('When deleting blogs', () => {
    test('A single blog  can be deleted', async () => {
        await api.delete(`/api/blogs/${blog2_id}`)
        .set('authorization', auth_token)
            .expect(204)
        
        const response = await api.get('/api/blogs')
        expect(response.body).toHaveLength(initialBlogs.length - 1)
    })
})

describe('when updating blog posts', () => {
    test('the likes can be updated with a PUT request', async () => {
        await api.put(`/api/blogs/${blog2_id}`)
            .send({likes: 666})
        
        const response = await api.get(`/api/blogs/${blog2_id}`)
        expect(response.body.likes).toBe(666)
    })
})


afterAll(() => { 
    mongoose.connection.close()
}) 