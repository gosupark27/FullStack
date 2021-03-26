import React from 'react'
import PhonebookEntry from './PhonebookEntry'

const Phonebook = ({ persons, deletePerson }) => {
    
    const phonebookEntries = () => {
        if (persons.length !== 0) {
            return persons.map(person => <PhonebookEntry key={person.name} id={person.id} deletePerson={deletePerson} name={person.name} number={person.phone} />)
        }
    }
    
    return (
        <div>
            <table>
                <tbody>
                    {phonebookEntries()}
                </tbody>
            </table>
        </div>
    )
}

export default Phonebook;