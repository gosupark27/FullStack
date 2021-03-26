import React from 'react'

const PhonebookEntry = ({name, number, id, deletePerson}) => {

    return (
        <tr>
            <td >{name}</td>
            <td>{number}</td>
            <td><button id={id} onClick={(e)=>{if(window.confirm(`Delete ${name}?`))deletePerson(e)}}>delete</button></td>
        </tr>
    )
}

export default PhonebookEntry;