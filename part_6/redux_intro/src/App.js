import React from 'react';
import ReactDOM from 'react-dom'
import noteReducer from './reducers/noteReducer'
import { createStore } from 'redux'
import './App.css';


const store = createStore(noteReducer)

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

const App = () => {
  return(
   <div>
     <ul>
       {store.getState().map( note => 
        <li key={note.id}>
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
