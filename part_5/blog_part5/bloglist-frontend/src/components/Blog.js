import React, {useState} from 'react'
import blogService from '../services/blogs'

const Blog = ({blog, deleteEntry}) => {
  const [full, setFull] = useState(false)  
  const currentUser= JSON.parse(window.localStorage.getItem('loggedInUser')).username
  const showDelete = blog.user.username === currentUser    
  console.log('currentUser', currentUser);
  console.log('showDelete: ', showDelete);
  
   
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

  const incrementLikes = async () => {
    try {
      const modificationid = blog.id
      console.log('modificationid reading a', modificationid);
      const updatedlikes = blog.likes + 1
      console.log('updated likes', updatedlikes);
      const updatedblog = {
        ...blog,
        likes: updatedlikes
      }
      const returnedblog = await blogService.update(modificationid, updatedblog)
      blog = returnedblog
      console.log('blog now looks like: ', blog);
    } catch (err) {
      console.log('the note could not be updated');
    }
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
         <button onClick={incrementLikes}>Like</button>
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
