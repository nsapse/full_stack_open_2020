import React, {useState, useEffect} from 'react'
import blogService from '../services/blogs'
import LogoutButton from './LogoutButton'
import Blog from './Blog'

const BlogDisplay = (props) => {
  const [blogs, setBlogs] = useState([])
  
  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(blogs.sort((blogOne,blogTwo) => (blogOne.likes > blogTwo.likes) ? -1 : 1))
    )}, [])

  const deleteEntry = async (id) => {
    const confirmation = window.confirm("Are you sure you want to delete this post")
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
      console.log('the note could not be updated');
    }
  }

  return(
    <div>
      <h2>Blogs</h2>
      <LogoutButton handleLogout={props.handleLogout} />
      <h3>Posted Blogs</h3> 
      {blogs.map(blog =>
        <Blog key={blog.id}
              blog={blog}
              deleteEntry={deleteEntry}
              incrementLikes={incrementLikes}
              />
      )}
      <div className="blog_form">
        {props.children}
      </div>
    </div>
  )
}

export default BlogDisplay