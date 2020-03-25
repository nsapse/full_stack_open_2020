import React, { useState } from 'react'
import Display from './components/Display'
import InputField from './components/InputField'
import Filter from './components/Filter'

const App = () => {

  // State to track an array of person objects each containing
  // name: A string of characters representing a person's name
  // number: A string of numbers representing a phone number
  // 
  // Does not contain ID attribute although those will likely be added 
  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  // State to control the name input field (ie linked to controlled component)
  // initialized to string: 'a new person'
  
  const [ newName, setNewName ] = useState(
    'a new person'
  )

  // State to track phone number input field (ie linked to controlled component)
  // initialized to string: '555-555-5555' (an obviously fake number) 

  const [number, setNumber] = useState('555-555-5555')
  
  // A state to track the value of the filter input field (ie linked to controlled component)
  
  const [filter, setFilter] = useState('')

  // a state to track whether or not all persons should be displayed

  const [showAll, setShowAll] = useState(true)
  // Function to add new person objects (with associated numbers) to the persons array
  
  const addName  = (event) => {

    // Prevent the default behaviour of the called form (i.e. refreshing on submit)
    event.preventDefault()

    // NewObject to be added to the persons state (if it passes later validation)
    // includes:
    // name: assigned to the current value of the newName state (ie the name input's current value)
    // number: assigned to the current value of the number state (ie the number input's current value)
    // id: assigned to the current persons' state's lenght + 1 (only works because values cannot be deleted)

    const newObject = {
      name: newName,
      number: number,
      id: persons.length + 1
    }

    // found: a validation function. Converts newObjects name to lower case and compares it to each of the names
    // in the persons state (also converted to lower case). Returns a truish value if the name is found in the persons 
    // state. Falshish if not.
    
    const found = persons.some(person => person.name.toLocaleLowerCase() === newObject.name.toLowerCase())  

    // if found returns a Truish value (i.e the name is already in the persons state) alerts the users 

    if (found) {
      alert(`${newObject.name} already in Phonebook`)
    } 
    
    // if found returns a Falsish value (i.e the name is not already in the persons state) adds the new object to 
    // the persons state.

    else{
    setPersons(persons.concat(newObject))
    setNewName('')
    } 
  }
    
  //  const peopleToShow = showAll ? persons:persons.filter()
  // name input change handler

  const handleFormChange = (event) => {
    setNewName(event.target.value)
  }

  // num input change handler
  
  const handleNumChange = (event) => {
    setNumber(event.target.value)
  }
 
  // filter input change handler
  // in addition to changing the filter state to match the input field updates the showAll 
  // state to based on whether or not the user has entered information into the filter field indicating
  // they want results to be filtered.

  const handleFilter = (event) => {
    setFilter(event.target.value)
    // console.log('filter state value is: ', filter);
    if (filter === ''){
      setShowAll(true)
    } 
    else{
      setShowAll(false)
    }
  }
 
  // Const to track the group of people to be shown.
  // When showAll state turns false (ie the filter field != '') returns the full persons state
  // When showAll is true returns the persons state filtered for objects whose names contain the string stored
  // in the current filter state.
  // 
  // The filter state and names are both transmuted to lower case to allow for case insensitivity.

  
 const personsToShow = showAll ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  
  // the JSX returned

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value = {filter} onChange = {handleFilter} />
      <h2>Add New</h2>
      <form  onSubmit = {addName}>
        <div>
        <InputField value = {newName} onChange = {handleFormChange}/>
        <InputField value = {number} onChange = {handleNumChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Display persons = {personsToShow}/>
    </div>
  )
}

export default App