import React from 'react'
import { useState } from 'react'

const Country = ({country, i}) => {
      const [showFull, setShowFull] = useState(false)  
      const buttonHandler = () => {
        return(
            // console.log('Button Clicked')
          setShowFull(!showFull)
        )
      }
            if (showFull === true) {
                return(
                <div id = {i}>
                    <h1>{country.name}</h1>
                    <button onClick = {buttonHandler}>Toggle Full</button>
                    <p>Capital: {country.capital}</p>
                    <p>Population: {country.population}</p>
                    <h4>Languages</h4>
                    <ul>
                    {country.languages.map((language, i) => {
                        return(
                            <li id = {i}>{language.name}</li>
                        )
                    })}
                    </ul>
                    <img src={country.flag} alt=""/>
                </div>
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