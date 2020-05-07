const mongoose= require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const User = require('../models/user') 
require('express-async-errors')

const api = supertest(app)

const initialUsers = [
    {
       username:"Golden_Droid",
       name:"C3P0",
       password:"0h,my!1"
    }
]

beforeEach( async () => {
    await User.deleteMany({})

    let userObject = new User(initialUsers[0])
    await userObject.save()
})

describe('When adding a new user', () => {
    test('the operation will fail if the name is less than three characters', async () => {
       const newUser = {
           username:"R2",
           name:"R2_D2",
           password:"beepBeepB00p"
       } 
       const result = await api
        .post('/api/users')
        .send(newUser)
        .expect(400)

        expect(result.body.error).toContain('User validation failed: username: Path `username` (`R2`) is shorter than the minimum allowed length (3).')

    })

    test('the operation will fail if the password is less than three characters', async () => {
       const newUser = {
           username:"The_Senate",
           name:"Palpatine",
           password:"12"
       } 
       const result = await api
        .post('/api/users')
        .send(newUser)
        .expect(400)

        expect(result.body.error).toContain('password must be greater than')
    })

    test('the operation will fail if the name already exists in the database', async () => {
       const newUser = {
           username:"Golden_Droid",
           name:"C3P0",
           password:"0h,my!1"
       } 
       
       const result = await api
        .post('/api/users')
        .send(newUser)
        .expect(400)

        expect(result.body.error).toContain('Error, expected `username` to be unique.')
    })

})

afterAll(() => {
    mongoose.connection.close()
})
