import React from 'react'
import Country from './Country'

const Display = ({countries}) => {
  // If the length of the filtered array being passed is 
  // equal to 1 then the display renders a full "country" component
  if (countries.length === 1) {
    return (
      countries.map((country, i) => {
        return(
            <Country country = {country} i = {i}></Country>
        )
      }
    )
  )
  } 
  
  // If the lenght of the filtered array passed forward from
  // the App component is longer than 1 then only the names of
  // the matching countries are displayed.

  else {
    return(
      countries.map((country) => {
        return(
          <p>{country.name}</p>
        )
      })
    )
  }  
}

export default Display