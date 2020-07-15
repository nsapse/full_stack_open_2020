import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, useDispatch } from 'react-redux'
import store from './store'
import App from './App'
import anecdoteService from './services/anecdotes'
import AnecdoteForm from './components/AnecdoteForm'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

// const dispatch = useDispatch()

// anecdoteService.getAll().then( anecdotes => 
//   store.dispatch(initializeAnecdotes(anecdotes))
//  )

store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)