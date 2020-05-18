import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import LoginForm from './components/loginForm'
import Notification from './components/Notification'
import NewBlogForm from './components/NewBlogForm'
import BlogDisplay from './components/BlogDisplay'
import LogoutButton from './components/LogoutButton'
import Toggleable from './components/Toggleable'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)
  const blogFormRef = React.createRef()

  useEffect(() => {
    const loggedInUserJSON = window.localStorage.getItem('loggedInUser')
    if (loggedInUserJSON) {
      const user = JSON.parse(loggedInUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  },[])

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )}
  , [])


  const handleLogin = async (event) => {
    event.preventDefault()
    try {
     const user = await loginService.login({
       username, password
     })

     window.localStorage.setItem('loggedInUser', JSON.stringify(user))

     setUser(user)
     blogService.setToken(user.token)
     setUsername('')
     setPassword('')
     setSuccessMessage(`Logged in as ${user.username}`)
     setTimeout(() => {
       setSuccessMessage(null)
     }, 5000);
    // console.log(`user set to : ${user}`);
    // console.log(`user's token is ${user.token}`);
    
    
    //  const properBlogs = blogs.filter(blog => blog.user !== undefined) 
    //  const userBlogs = properBlogs.filter(blog => blog.user.username === user.username)
    //  window.localStorage.setItem('loggedInBlogs', JSON.stringify(userBlogs))
    //  setBlogs(userBlogs)

    }
    catch (exception) {
      console.log('login failed');
      setErrorMessage('Wrong username or password')
      setTimeout(() => {
        setErrorMessage(null) 
      }, 5000);
    }
  }
  
  const handleLogout = async (event) => {
    event.preventDefault()
    window.localStorage.removeItem('loggedInUser')
    window.localStorage.removeItem('loggedInBlogs')
    setUser(null)
  }

  const handlePost = async (event) => {
    event.preventDefault()
    const header = 'Authorization: Bearer ' + user.token
    try {
      const newBlog = { title, author, url}
      const newObject = await blogService.create(newBlog)
      blogFormRef.current.toggleVisibility()

      setSuccessMessage(`Added ${newBlog.title} by ${newBlog.author}`)

      setBlogs(blogs.concat(newObject))

      setTimeout(() => {
        setSuccessMessage(null)
      }, 5000);
      
      setAuthor('')
      setTitle('')
      setUrl('')

    } catch (err) {
      setErrorMessage('Addition of the new blog failed')

      setTimeout(() => {
        setErrorMessage(null) 
      }, 5000)
    }
  }

  const blogDisplay = () => (
    <BlogDisplay
      handleLogout={handleLogout}
      blogs={blogs}
    >
      <Toggleable buttonLabel="Add A New Blog"  ref={blogFormRef}>
        <NewBlogForm
          title={title}
          author={author}
          url={url}
          handlePost={handlePost}
          handleTitleChange={({ target }) => setTitle(target.value)}
          handleAuthorChange={({ target }) => setAuthor(target.value)}
          handleUrlChange={({ target }) => setUrl(target.value)}
        />
      </Toggleable>
    </BlogDisplay>
  )

  return (
    <div>
      <div>
        <Notification
          successMessage={successMessage}
          errorMessage={errorMessage}
        />
      </div>
      <div>
        {user === null ?
          <LoginForm
            username={username}
            password={password}
            handleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}
            handleLogin={handleLogin}
          /> :
          blogDisplay()
        }
      </div>
    </div>
  )
}

export default App