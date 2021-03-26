import React from 'react'
import Button from './Button'

const CountriesList = ({list, onClick}) => {

    
    return (
        <div>
            
            <table>
                <tbody>
                    {list.map(country =>
                        <Button key={country.numericCode} id={country.numericCode} onClick={onClick} name={country.name}/>)}
                </tbody>
            </table>
        </div>
    )    
}

export default CountriesList