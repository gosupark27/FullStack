import React from 'react'
import PhonebookEntry from './PhonebookEntry'

const Phonebook = ({persons}) => {

    return (
        <div>
            <h2>Numbers</h2>
            <table>
                <tbody>
                    {persons.map(person => <PhonebookEntry key={person.name} name={person.name} number={person.phone}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default Phonebook;