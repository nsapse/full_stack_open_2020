import React, {useState} from 'react'
import blogService from '../services/blogs'

const currentUser = JSON.parse(window.localStorage.getItem('loggedInUser'))

const Blog = ({ blog }) => {
  const [full, setFull] = useState(false)  
  const flipFullState = () => {
    setFull(!full)
  }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const incrementLikes = async () => {
    try {
      const modificationID = blog.id
      const updatedLikes = blog.likes + 1
      const updatedBlog = {
        ...blog,
        likes: updatedLikes
      }
      const returnedBlog = await blogService.update(modificationID, updatedBlog)
      blog = returnedBlog
    } catch (err) {
      console.log('The note could not be updated');
    }
  }
  
  
  const deleteEntry = async () => {
    const confirmation = window.confirm("Are you sure you want to delete this post")
    const targetID = blog.id
    if(confirmation) {
          blogService.deleteOne(targetID)
    }
    return null
  }
   
  if (full && blog.user.username === currentUser.username) {
   return(
     <div style={blogStyle}>
       <p>{`${blog.title} by ${blog.author}`}</p>
       <p>{`URL: ${blog.url}`}</p>
       <div>
         <p>
           {`Likes: ${blog.likes}`}
         </p>
         <button onClick={incrementLikes}>Like</button>
       </div>
       <p>{`${blog.user.username}`}</p>
       <button onClick={flipFullState} >Hide Full</button>
         <button onClick={deleteEntry}>Delete Blog Entry</button>
     </div>
   ) 
  }
  else if (full) {
   return(
     <div style={blogStyle}>
       <p>{`${blog.title} by ${blog.author}`}</p>
       <p>{`URL: ${blog.url}`}</p>
       <div>
         <p>
           {`Likes: ${blog.likes}`}
         </p>
         <button onClick={incrementLikes}>Like</button>
       </div>
       <p>{`${blog.user.username}`}</p>
       <button onClick={flipFullState} >Hide Full</button>
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
