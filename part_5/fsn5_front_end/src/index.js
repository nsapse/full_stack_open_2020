import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'
import './index.css'
import React from 'react'

// const mongoose = require('mongoose')
// const password = process.argv[2]
// const url = `mongodb+srv://full_stack_projects:${password}@cluster0-rs6zo.mongodb.net/test?retryWrites=true&w=majority`
// mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology:true})

// const noteSchema = new mongoose.Schema({
//   content: String,
//   Date: Date,
//   important: Boolean,
// })

// const Note = mongoose.model('Note', noteSchema)

axios
  .get('/api/notes')
  .then(response => {
    const notes = response.data
    console.log('request coming from front end');
    ReactDOM.render(
    <App notes={notes} />,
    document.getElementById('root')
    )

})
  
