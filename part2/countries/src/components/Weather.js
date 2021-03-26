import React from 'react'

const Weather = ({weather}) => {
    console.log('weather:',weather)
    if(typeof weather !== 'undefined'){
        return(
            <div>
                <p><strong>temperature:</strong>{(typeof weather.current.temperature === 'undefined')? null : weather.current.temperature } Celsius</p>
                <img src={weather.current.weather_icons[0]} alt={weather.current.weather_descriptions[0]}/>
                <p><strong>wind:</strong>{weather.current.wind_speed} mph direction {weather.current.wind_dir} </p>
            </div>
        )
    }
    else{
        return(
            <h1 style={{color:'red'}}><strong>Sorry, there is no available weather forecast.</strong></h1>
        )
    }
}

export default Weather