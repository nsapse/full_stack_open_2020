import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'


const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    console.log(`logging in with username: ${username} password: ${password}`);
    try {
     const user = await loginService.login({
       username, password
     })

     setUser(user)
     console.log('user set to :', user.username)
     console.log('user of type:', typeof user.username)  
     const properBlogs = blogs.filter(blog => blog.user !== undefined) 
     const userBlogs = properBlogs.filter(blog => blog.user.username === user.username)
     console.log('Userblogs now contains', userBlogs) 
     userBlogs.forEach(blog => console.log(`blog posted by ${blog.user ? blog.user.username : "no user"}`))
     
     setBlogs(userBlogs)
     setUsername('')
     setPassword('')

    }
    catch (exception) {
     console.log('User Attempted Login With Invalid Credentials')
    }
  }
  
  const loginForm = () => (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          username:
          <input
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password:
          <input
            type="text"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
const blogDisplay = () => (
    <div>
      <h2>Blogs</h2>
      <h3>Posted By {user.name}</h3> 
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
)

  return (
    <div>
    { user === null ?
      loginForm() :
      blogDisplay()
        }
    </div>
  )
}

export default App