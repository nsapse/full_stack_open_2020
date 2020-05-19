import React, {useState} from 'react'

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
  
  if (full) {
   return(
     <div style={blogStyle}>
       <p>{`${blog.title} by ${blog.author}`}</p>
       <p>{`URL: ${blog.url}`}</p>
       <div>
         <p>
           {`Likes: ${blog.likes}`}
         </p>
         <button>Like</button>
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
