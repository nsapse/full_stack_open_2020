import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { prettyDOM } from '@testing-library/dom'
import Blog from './Blog'

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

let component

beforeEach(() => {
  component = render(
    <Blog blog={blog} deleteEntry={deleteEntry} incrementLikes={incrementLikes}>
    </Blog>
  )
})

test('A blog renders its title, and author but not URL, when minimized', () => {
  expect(component.container).toHaveTextContent(
    'Test Blog'
  )
  expect(component.container).toHaveTextContent(
    'Test Author'
  )
  expect(component.container).not.toHaveTextContent(
    'http://localhost.com/test_url'
  )
})
test('A blog shows its url and likes when expanded', () => {
  // component.debug()
  const button = component.getByText('Expand')
  fireEvent.click(button)
  expect(component.container).toHaveTextContent(
    'http://localhost.com/test_url'
  )
  expect(component.container).toHaveTextContent(
    'Likes: 420'
  )
})
test('The like button fires when clicked', () => {
  const expandButton = component.getByText('Expand')
  fireEvent.click(expandButton)
  const likeButton = component.getByText('Like')
  fireEvent.click(likeButton)
  fireEvent.click(likeButton)
  expect(incrementLikes.mock.calls).toHaveLength(2)
})

