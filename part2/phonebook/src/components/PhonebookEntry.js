import React from 'react'

const PhonebookEntry = ({id,name,number}) => {

    return (
        <tr>
            <td >{name}</td>
            <td>{number}</td>
        </tr>
    )
}

export default PhonebookEntry;