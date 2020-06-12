import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseVote } from '../reducers/anecdoteReducer'


  
const Anecdote = ({ anecdote, vote }) => {
    return (
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={ vote }>vote</button>
          </div>
        </div>
    )
}

const AnecdoteList = () => {
   const dispatch = useDispatch()

   const anecdotes = useSelector(state => state.anecdotes)
   const sortedAnecdotes = anecdotes.sort((a,b) => b.votes - a.votes)

   return (
    <ul>
      {sortedAnecdotes.map(anecdote =>
        <Anecdote
        anecdote={anecdote}
        vote={() => dispatch(increaseVote(anecdote.id))}
        />
      )}
    </ul>
   )
}


export default AnecdoteList
            