import React from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'

const App = () => {

  return (
    <div>
      <Notification></Notification>
      <h2>Anecdotes</h2>
      <AnecdoteList></AnecdoteList>
      <h2>create new</h2>
      <AnecdoteForm></AnecdoteForm>
      <Filter></Filter>
    </div>
  )
}

export default App