import React from 'react'
import PropTypes from 'prop-types'

const NewBlogForm = ({
  title,
  author,
  url,
  handlePost,
  handleTitleChange,
  handleAuthorChange,
  handleUrlChange
}) => (
  <div>
    <h2>Create New Blogs</h2>
    <form onSubmit={handlePost}>
      <div>
          Title:
        <input
          id='Title'
          type="text"
          value={title}
          name="Title"
          onChange={handleTitleChange}
        />
      </div>
      <div>
          Author:
        <input
          id='Author'	
          type="text"
          value={author}
          name="Author"
          onChange={handleAuthorChange}
        />
      </div>
      <div>
          url:
        <input
          id='Url'
          type="text"
          value={url}
          name="url"
          onChange={handleUrlChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
)

NewBlogForm.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  handleAuthorChange: PropTypes.func.isRequired,
  handlePost: PropTypes.func.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  handleUrlChange: PropTypes.func.isRequired,
}
export default NewBlogForm