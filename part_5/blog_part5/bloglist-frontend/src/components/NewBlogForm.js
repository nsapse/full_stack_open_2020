import React from 'react'

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
            type="text"
            value={title}
            name="Title"
            onChange={handleTitleChange}
          />
        </div>
        <div>
          Author:
  <input
            type="text"
            value={author}
            name="Author"
            onChange={handleAuthorChange}
          />
        </div>
        <div>
          url:
  <input
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

export default NewBlogForm