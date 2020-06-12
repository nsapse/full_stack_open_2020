import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notificationChange, notificationClear } from "../reducers/notificationReducer";
import { useDispatch } from 'react-redux'

const AnecdoteForm = (props) => {

    const dispatch = useDispatch()

      const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
        dispatch(notificationChange(`${content} added to anecdotes`))
        setTimeout(() => {
          dispatch(notificationClear())
      }, 5000);
      }

    return (
      <form onSubmit={addAnecdote}>
          <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    ) 
}

export default AnecdoteForm