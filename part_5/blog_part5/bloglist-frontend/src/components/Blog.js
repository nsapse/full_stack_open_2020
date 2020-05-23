import React, {useState} from 'react'
import blogService from '../services/blogs'

const Blog = ({blog, deleteEntry, incrementLikes}) => {
  const [full, setFull] = useState(false)  
  const currentUser= JSON.parse(window.localStorage.getItem('loggedInUser')).username
  const showDelete = blog.user.username === currentUser    
   
  const flipFullState = () => {
    setFull(!full)
  }

  const deleteVisible = {display: showDelete ? '' : 'none'}

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  if (full) {
   return(
     <div style={blogStyle}>
       <p>{`${blog.title} by ${blog.author}`}</p>
       <p>{`URL: ${blog.url}`}</p>
       <div>
         <p>
           {`Likes: ${blog.likes}`}
         </p>
         <button onClick={() => incrementLikes(blog.id)}>Like</button>
       </div>
        <p>{`${blog.user.username}`}</p>
        <button onClick={flipFullState} >Hide Full</button>
        <button style={deleteVisible} onClick={() => deleteEntry(blog.id)}>Delete Blog Entry</button>
     </div>
   ) 
  }
  else {
    return(
      <div>
        {blog.title} {blog.author}
        <button onClick={flipFullState} >View Full</button>
      </div>
    )
  }
}

export default Blog
