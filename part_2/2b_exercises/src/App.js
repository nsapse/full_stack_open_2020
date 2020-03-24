import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState(
    'a new person'
  )

  const [number, setNumber] = useState('555-555-5555')
  
  const addName  = (event) => {
    event.preventDefault()
    const newObject = {
      name: newName,
      number: number,
      date: new Date().toISOString(),
      id: persons.length + 1
    }
    const found = persons.some(person => person.name.toLocaleLowerCase() === newObject.name.toLowerCase())  
    if (found) {
      alert(`${newObject.name} already in Phonebook`)
    } 
    else{
    setPersons(persons.concat(newObject))
    setNewName('')
    } 
  }
  const handleFormChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    setNumber(event.target.value)
  }
  
 
  return (
    <div>
      {/* <div>debug: {newName} </div> */}
      <h2>Phonebook</h2>
      <form  onSubmit = {addName}>
        <div>
          <p>
          name:
          <input
          value = {newName} 
          onChange = {handleFormChange}
          />
          </p>
          <p>
          number:
          <input
          value = {number} 
          onChange = {handleNumChange}
          />
          </p>  
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
     {persons.map((person, i) => <p id = {i}>{person.name}: {person.number}</p>)}
    </div>
  )
}

export default App