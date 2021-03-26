import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Weather from './Weather'

const Country = ({ list }) => {
    const [country] = list
    const [weather, setWeather] = useState()
    console.log('list data:', list)

    const apiKey = process.env.REACT_APP_API_KEY
    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${country.capital}`

    useEffect(() => {
        const fetchWeather = async () => {
            await axios.get(url)
                .then(response => {
                    const weatherData = response.data
                    if(response.success){
                        setWeather(weatherData)
                    }
                    setWeather(undefined)
                })
        }
        fetchWeather()

    }, [url])

    console.log('weather of poly:', weather)

    return (
        <div>
            <h1>{country.name}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h3>languages</h3>
            <ul>
                {country.languages.map(lang => <li>{lang.name}</li>)}
            </ul>
            <img src={country.flag} style={{ height: '300px' }} alt={`${country.name}'s flag`} />
            <h3>Weather in {country.capital}</h3>
            <Weather weather={weather} />
        </div>
    )


}

export default Country