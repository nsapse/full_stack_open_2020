import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'
import './index.css'

axios
  .get('http://localhost:3001/api/notes')
  .then(response => {
    const notes = response.data
// const App = () => {
//   return(
//     <div>Hello, World</div>
//   )
// }

    ReactDOM.render(
    <App notes={notes} />,
    document.getElementById('root')
    )

})
  
