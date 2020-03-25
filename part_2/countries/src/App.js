import React from 'react';
import './App.css';
import  { useState, useEffect } from 'react'
import Display from './components/Display'
import axios from 'axios'

function App() {
  // Uses axios to get https://restcountries.eu/rest/v2/all and 
  // set the application's main state to the response.

  // an application state to keep track of country data. Initialized to an empty array.
  const [countries, setCountries] = useState([])
  
  // an application state to track the content of the controlled filter component
  const [filter, setFilter] = useState('enter a country')
  
  // an application state to track whether all or only some of the countries 
  // should be displayed at a given time.
  // const [showAll, setShowAll] = useState(true)
  
  // The function to be called by useEffect below. 
  // Sets countries state to results of api call if successful
  const countryHook = () => {
    console.log('Downloading list of countries');
    axios
      .get('http://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
        console.log(response);
        
      })
  }
  
  // useEffect which calls axios call function defined above.

  useEffect(countryHook, []) 
  
  // Event Handler for filter input field 
  const handleFilter = (event) => {
        console.log(event.target.value);
        setFilter(event.target.value)
  }
   


  // ToDo: Filter the countries to display from response based on user input

  return (
   <div>
     <div>
       <h4>Find Countries</h4> 
       <input value = {filter} onChange = {handleFilter} type="text"/>
     </div>
     <Display countries = {countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))}></Display>
   </div>
)
}

export default App;
