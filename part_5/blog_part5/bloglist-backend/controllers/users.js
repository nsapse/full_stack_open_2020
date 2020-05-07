const bcrypt= require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.post('/', async (request, response) => {
    const body = request.body
    const password = body.password

    if (password.length < 3) {
        return response.status(400).json({"error":"password must be greater than three characters in lenght"})     
    }    
    
        const saltRounds = 10
        const passwordHash = await bcrypt.hash(body.password, saltRounds)

        const user = new User({
            username: body.username,
            name: body.name,
            passwordHash,
        });

        const savedUser = await user.save()

        response.json(savedUser)

})

usersRouter.get('/', async (request, response) => {
    const users = await User
        .find({})
        .populate('blogs')
    response.json(users.map(u => u.toJSON()))
})

module.exports = usersRouter
