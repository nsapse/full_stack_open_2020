import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Blog from './Blog'

describe('A blog', () => {
  const blog = {
    title:'Test Blog',
    author: 'Test Author',
    url: 'http://localhost.com/test_url',
    likes: 420,
    id: '999999999999999999999999',
    user: {
      name: 'test user' ,
      username: 'test usernamed',
      id: '999999999999999999999999',
      blogs: {}
    }
  }

  const deleteEntry = jest.fn()
  const incrementLikes = jest.fn()

  const component = render(
    <Blog blog={blog} deleteEntry={deleteEntry} incrementLikes={incrementLikes}>
    </Blog>
  )

  test('is properly rendered', () => {
    expect(component.container).toHaveTextContent(
      'Test Blog'
    )
  })

  test('contains the proper information when minimized', () => {
    expect(component.container).not.toHaveTextContent(
      'http://localhost.com/test_url'
    )
  })


})
