import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'
import './index.css'

axios
  .get('/api/notes')
  .then(response => {
    const notes = response.data

    ReactDOM.render(
    <App notes={notes} />,
    document.getElementById('root')
    )

})
  
