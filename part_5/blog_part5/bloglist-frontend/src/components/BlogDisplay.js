import React from 'react'
import LogoutButton from './LogoutButton'
import Blog from './Blog'

const BlogDisplay = (props) => (
    <div>
      <h2>Blogs</h2>
      <LogoutButton handleLogout={props.handleLogout} />
      <h3>Posted Blogs</h3> 
      {props.blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
      {/* {NewBlogForm()} */}
      <div className="blog_form">
        {props.children}
      </div>
    </div>
)

export default BlogDisplay