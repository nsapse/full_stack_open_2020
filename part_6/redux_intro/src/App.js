import React from 'react';
import ReactDOM from 'react-dom'
import noteReducer from './reducers/noteReducer'
import { createStore } from 'redux'
import './App.css';


const store = createStore(noteReducer)
const generateId = () => {
  Number((Math.random() * 100000).toFixed(0)) 
}

store.dispatch({
  type: 'NEW_NOTE',
  data: {
    content: 'state changes are made with actions',
    important: false,
    id: 2
  }
})

store.dispatch({
  type: 'NEW_NOTE',
  data: {
    content: 'the app state is in redux store',
    important: false,
    id: 5
  }
})

const createNote = (content) => {
  return {
    type: 'NEW_NOTE',
    data: {
      content,
      important: false,
      id: generateId()
    }
  }
}

const toggleImportanceOf = (id) => {
  return{
      type: 'TOGGLE_IMPORTANCE',
      data: { id }
  }
}


const App = () => {
  const addNote = (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''
    store.dispatch(createNote(content))
  }

  const toggleImportance = (id) => {
    store.dispatch(toggleImportanceOf(id))
  }
  
  return(
   <div>
     <form onSubmit={addNote}>
       <input type="text" name="note"/>
       <button type="submit">Add</button>
     </form>
     <ul>
       {store.getState().map( note => 
        <li 
          key={note.id}
          onClick={() => toggleImportance(note.id)} 
          >
          {note.content} <strong>{note.important ? 'important' : ''}</strong>
        </li>
        )}
     </ul>
   </div> 
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}


store.subscribe(renderApp)
export default App;
