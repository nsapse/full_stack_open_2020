import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom' ;

import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createNote } from './reducers/noteReducer'
import { filterChange } from './reducers/filterReducer'
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
  reducer,
  composeWithDevTools()
  )

noteService.getAll().then(notes => store.dispatch(initializeNotes(notes)))

store.subscribe(() => console.log(store.getState()))
store.dispatch(filterChange('IMPORTANT'))
store.dispatch(createNote('combineReducers froms one reducer from many simple reducers'))

export default store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
