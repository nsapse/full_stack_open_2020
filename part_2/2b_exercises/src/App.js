import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState(
    'a new person'
  )
  
  const addName  = (event) => {
    event.preventDefault()
    const newObject = {
      name: newName,
      date: new Date().toISOString(),
      id: persons.length + 1
    }
    setPersons(persons.concat(newObject))
  }
  const handleFormChange = (event) => {
    // console.log('event.target.value for form is:', event.target.value);
    setNewName(event.target.value)
  }
 
  return (
    <div>
      {/* <div>debug: {newName} </div> */}
      <h2>Phonebook</h2>
      <form  onSubmit = {addName}>
        <div> name:
          <input
          value = {newName} 
          onChange = {handleFormChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
     {persons.map((person, i) => <p id = {i}>{person.name}</p>)}
    </div>
  )
}

export default App