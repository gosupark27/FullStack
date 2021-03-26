import React from 'react'

const Button = ({ name, onClick, id }) => {
    const selectedCountry = e => {
        const code = e.target.id
        onClick(code)
    }
    return (
            <tr>
                <td>{name}  <button id={id} onClick={(e) =>selectedCountry(e)}>Show</button></td><td></td>
            </tr>
    )
}

export default Button