import React from 'react'
import { useState } from 'react'
import FullCountry from './Full_Country'

const Country = ({country, i}) => {
      const [showFull, setShowFull] = useState(false) 
  
    //   The callback function to handle button clicks, reverses the value
    // of the current showFull state.
      const buttonHandler = () => {
        return(
          setShowFull(!showFull)
        )
      }
            if (showFull === true){ 
            return(
                <FullCountry country = {country} i = {i} onClick = {buttonHandler}></FullCountry>
            )
            }
            else{
                return(
                <div>
                    <h1>{country.name}</h1>
                    <button onClick = {buttonHandler}>Toggle Full</button>
                </div>
                )
            }

            }
            
export default Country