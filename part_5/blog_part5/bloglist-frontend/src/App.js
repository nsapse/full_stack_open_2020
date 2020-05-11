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
    const loggedInUserJSON = window.localStorage.getItem('loggedInUser')
    if (loggedInUserJSON) {
      const user = JSON.parse(loggedInUserJSON)
      setUser(user)
    }
  },[])


  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )}
  , [])

  const handleLogin = async (event) => {
    event.preventDefault()
    console.log(`logging in with username: ${username} password: ${password}`);
    try {
     const user = await loginService.login({
       username, password
     })

     window.localStorage.setItem('loggedInUser', JSON.stringify(user))

     setUser(user)
    //  const properBlogs = blogs.filter(blog => blog.user !== undefined) 
    //  const userBlogs = properBlogs.filter(blog => blog.user.username === user.username)
    //  window.localStorage.setItem('loggedInBlogs', JSON.stringify(userBlogs))
    //  setBlogs(userBlogs)
     setUsername('')
     setPassword('')

    }
    catch (exception) {
     console.log('User Attempted Login With Invalid Credentials')
    }
  }
  
  const handleLogout = async (event) => {
    event.preventDefault()
    window.localStorage.removeItem('loggedInUser')
    window.localStorage.removeItem('loggedInBlogs')
    setUser(null)
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

const logOutButton = () => (
  <div>
    <button onClick={handleLogout}>Logout</button> 
  </div>
)

const blogDisplay = () => (
    <div>
      <h2>Blogs</h2>
      {logOutButton()}
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