import React, { useState, useEffect } from 'react'
import LoginForm from './components/loginForm'
import Notification from './components/Notification'
import NewBlogForm from './components/NewBlogForm'
import BlogDisplay from './components/BlogDisplay'
import Toggleable from './components/Toggleable'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(blogs.sort((blogOne,blogTwo) => (blogOne.likes > blogTwo.likes) ? -1 : 1))
    )}, [])

  const blogFormRef = React.createRef()

  useEffect(() => {
    const loggedInUserJSON = window.localStorage.getItem('loggedInUser')
    if (loggedInUserJSON) {
      const user = JSON.parse(loggedInUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  },[])

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
      }, 5000)
    }
    catch (exception) {
      console.log('login failed')
      setErrorMessage('Wrong username or password')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
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
    try {
      const newBlog = { title, author, url }
      blogFormRef.current.toggleVisibility()
      const newObject = await blogService.create(newBlog)
      setSuccessMessage(`Added ${newBlog.title} by ${newBlog.author}`)

      setBlogs(blogs.concat(newObject))

      setTimeout(() => {
        setSuccessMessage(null)
      }, 5000)

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

  const deleteEntry = async (id) => {
    const confirmation = window.confirm('Are you sure you want to delete this post')
    const targetID = id
    if(confirmation) {
      blogService.deleteOne(targetID)
      const remainingBlogs = blogs.filter(blog => blog.id !== targetID)
      setBlogs(remainingBlogs)
    }
    return null
  }

  const incrementLikes = async (id) => {
    try {
      const modificationID = id
      const blog = blogs.find(blog => blog.id === id)
      const updatedlikes = blog.likes + 1
      const updatedblog = {
        ...blog,
        likes: updatedlikes
      }
      const incrementedBlog = await blogService.update(modificationID, updatedblog)
      const updatedBlogs = blogs.filter(blog => blog.id !== id).concat(incrementedBlog)
      setBlogs(updatedBlogs)
    } catch (err) {
      console.log('the note could not be updated')
    }
  }
  
  const blogMethods = {deleteEntry, incrementLikes}
  const blogDisplay = () => (
    <BlogDisplay
      blogs = {blogs}
      blogMethods = {blogMethods}
      handleLogout={handleLogout}
    >
      <Toggleable buttonLabel="Add A New Blog" ref={blogFormRef}>
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