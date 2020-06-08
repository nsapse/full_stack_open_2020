import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseVote, createAnecdote } from './reducers/anecdoteReducer'
import AnecdoteForm from './components/anecdoteForm'

const App = () => {
  const anecdotes = useSelector(state => state)
  const sortedAnecdotes = anecdotes.sort((a,b) => b.votes - a.votes)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(increaseVote(id))
  }

  

  return (
    <div>
      <h2>Anecdotes</h2>
      {sortedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <AnecdoteForm></AnecdoteForm>
    </div>
  )
}

export default App