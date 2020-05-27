import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import Note from './Note'

test('Renders content', () => {
  const note = {
    content: 'Component testing is done with the react-testing-library',
    important: true
  }

  const component = render(
    <Note note = {note} />
  )

  // const li = component.container.querySelector('li')
  // console.log(prettyDOM(li));
  
  // Method 1
  expect(component.container).toHaveTextContent(
    'Component testing is done with the react-testing-library'
  )
  // Method 2
  const element = component.getByText(
    'Component testing is done with the react-testing-library'
  )
  expect(element).toBeDefined()

  // Method 3
  const div = component.container.querySelector('.note')
  expect(div).toHaveTextContent(
    'Component testing is done with the react-testing-library'
  )
})

test('clicking the button calls the event handler once', () => {
  const note = {
    content: 'Component testing is done with the react-testing-library',
    important: true
  }

  const mockHandler = jest.fn()

  const component = render(
    <Note note={note} toggleImportance={mockHandler}></Note>
  )

  const button = component.getByText('make not important')

  fireEvent.click(button)


  expect(mockHandler.mock.calls).toHaveLength(1)
})

