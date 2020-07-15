import React from 'react';
import ReactDOM from 'react-dom' ;

import { createStore, combineReducers } from 'redux'
import { createNote } from './reducers/noteReducer'
// import { filterChange } from './reducers/filterReducer'
import { Provider } from 'react-redux'

import noteReducer, { initializeNotes } from './reducers/noteReducer'
import filterReducer from './reducers/filterReducer'

import noteService from './services/notes'

import './index.css';
import App from './App';


const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer
})

const store = createStore(
  reducer
  )

noteService.getAll().then(notes => store.dispatch(initializeNotes(notes)))

// noteService.getAll().then(notes =>
//     notes.forEach(note => {
//       store.dispatch({type: 'NEW_NOTE', data: note})
//     }))

store.subscribe(() => console.log(store.getState()))
// store.dispatch(filterChange('ALL'))
store.dispatch(createNote('combineReducers creates one reducer from many simple reducers'))

export default store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
