import React, { useState } from 'react'
import Country from './Country'
import CountriesList from './CountriesList'

const Display = ({ countryList, onClick }) => {
    const [show, setShow] = useState(false)
    const setToShow = () => {
        setShow(!show)
    }

    return(
        <div>
            {(countryList.length === 1)?
            <Country list={countryList}/>:
            (countryList.length > 10)?
            <div>Too many matches, specify another filter</div>:
            <CountriesList list={countryList} click={setToShow} onClick={onClick} show={show}/>}
        </div>
    )
}


export default Display;