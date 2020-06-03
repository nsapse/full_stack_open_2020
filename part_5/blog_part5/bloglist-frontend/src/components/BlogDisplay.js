import React from 'react'
// import blogService from '../services/blogs'
import LogoutButton from './LogoutButton'
import Blog from './Blog'

const BlogDisplay = (props) => {

  return(
    <div>
      <h2>Blogs</h2>
      <LogoutButton handleLogout={props.handleLogout} />
      <h3>Posted Blogs</h3>
      {props.blogs.map(blog =>
        <Blog key={blog.id}
          blog={blog}
          deleteEntry={props.blogMethods.deleteEntry}
          incrementLikes={props.blogMethods.incrementLikes}
        />
      )}
      <div className="blog_form">
        {props.children}
      </div>
    </div>
  )
}

export default BlogDisplay