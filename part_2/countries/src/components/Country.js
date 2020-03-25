import React from 'react'

const Country = ({country, i}) => {
    
         return (
            <div id = {i}>
                <h1>{country.name}</h1>
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
            
export default Country