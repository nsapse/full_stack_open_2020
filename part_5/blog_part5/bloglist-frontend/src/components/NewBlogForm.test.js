import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NewBlogForm from './NewBlogForm'

test('The form calls the proper event handler with proper details when called', () => {
  const handlePost = jest.fn()
  const handleTitleChange = jest.fn()
  const handleAuthorChange = jest.fn()
  const handleUrlChange = jest.fn()

  const component = render(
    <NewBlogForm
      handlePost={handlePost}
      title='Test Blog'
      author='Test Author'
      url='http://test.test'
      handleTitleChange={handleTitleChange}
      handleAuthorChange={handleAuthorChange}
      handleUrlChange={handleUrlChange}
    />
  )

  const Title = component.container.querySelector('#Title')
  const Author = component.container.querySelector('#Author')
  const Url = component.container.querySelector('#Url')
  const form = component.container.querySelector('form') 
  fireEvent.change(Title, {
    target: {value: 'testing forms is a bit byzantine'}
  })

  fireEvent.submit(form)

  expect(handlePost.mock.calls).toHaveLength(1)
  console.log(handlePost.mock.calls[0][0].content);
})
