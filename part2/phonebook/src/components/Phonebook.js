import React from 'react'
import PhonebookEntry from './PhonebookEntry'

const Phonebook = ({ persons, deletePerson }) => {
    console.log('hello phonebook persons:', persons, "type:", typeof persons)
    
    const phonebookEntries = () => {
        if (persons.length !== 0 || persons.length !== 'undefined') {
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