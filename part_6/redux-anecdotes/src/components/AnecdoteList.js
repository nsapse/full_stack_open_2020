import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { notificationChange, notificationClear } from "../reducers/notificationReducer";
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
   const ammendVotes = (anecdote, id) => {
     dispatch(increaseVote(id))
     dispatch(notificationChange(`Voted for ${anecdote}`))
     setTimeout(() => {
      dispatch(notificationClear())
     }, 5000);
   }
   const anecdotes = useSelector(state => {
     if (state.filter === 'ALL' || state.filter ==='') {
       return state.anecdotes
     }
     return state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().indexOf(state.filter.toLowerCase()) > -1 ) 
   })

   const sortedAnecdotes = anecdotes.sort((a,b) => b.votes - a.votes)

   return (
    <ul>
      {sortedAnecdotes.map(anecdote =>
        <Anecdote
        anecdote={anecdote}
        vote={() => ammendVotes(anecdote.content, anecdote.id)}
        />
      )} </ul>)
}


export default AnecdoteList
            