import React from 'react'
import Country from './Country'

const Display = ({countries}) => {
    console.log('The lenght of the Countries array is', countries.length);
    
    return (
      countries.map((country, i) => {
        return(
            <Country country = {country} i = {i}></Country>
        )
      }
    )
  )
}

export default Display