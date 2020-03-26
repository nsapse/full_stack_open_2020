import React from 'react'
import Country from './Country'

const Display = ({countries}) => {
    return (
      countries.map((country, i) => {
          return(
              <Country country = {country} i = {i}></Country>
          )
        }
      )
    )
      }
export default Display;