import React, { useState, useEffect } from 'react'
import axios from 'axios'

const FullCountry = ({country, i, buttonHandler}) => {
    const [weather, setWeather] = useState([])
      
    // const to keep track of API key by pulling in from the startup ENV
    const api_key = process.env.REACT_APP_API_KEY
    
    useEffect(() => {
        console.log('Currently making a weather API call for', country.capital);
            axios
            .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`)                    
            .then(response => {
                console.log('Response is', response.data.current);
                setWeather(response.data.current)
            })
            
    }, [])
    console.log(weather);
    
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
        <h4>Weather in {country.capital}</h4> 
          
        <p>Temperature: {weather.temperature}</p>
        <p>Wind: {weather.wind_speed} mph direction {weather.wind_dir}</p>
    </div>
    
    )
}
 
export default FullCountry