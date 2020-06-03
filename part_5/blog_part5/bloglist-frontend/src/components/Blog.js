import React, { useState } from 'react'
import blogService from '../services/blogs'

const Blog = ({ blog, deleteEntry, incrementLikes }) => {
  const [full, setFull] = useState(false)
  const loggedInUser= JSON.parse(window.localStorage.getItem('loggedInUser'))
  const currentUser = loggedInUser ? loggedInUser.username : ''
  const showDelete = blog.user.username === currentUser

  const flipFullState = () => {
    setFull(!full)
  }

  const deleteVisible = { display: showDelete ? '' : 'none' }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  if (full) {
    return(
      <div style={blogStyle} className="fullBlog">
        <p className="titleHeader">{`${blog.title} by ${blog.author}`}</p>
        <p>{`URL: ${blog.url}`}</p>
        <div>
          <p>
            {`Likes: ${blog.likes}`}
          </p>
          <button id="likeButton" onClick={() => incrementLikes(blog.id)}>Like</button>
        </div>
        <p>{`${blog.user.username}`}</p>
        <button onClick={flipFullState} >Hide Full</button>
        <button style={deleteVisible} id="deleteButton" onClick={() => deleteEntry(blog.id)}>Delete Blog Entry</button>
      </div>
    )
  }
  else {
    return(
      <div className="minBlog">
        {blog.title} {blog.author}
        <button className="expandButton" onClick={flipFullState}>
          Expand
        </button>
      </div>
    )
  }
}

export default Blog
