import React from 'react'
import PhonebookEntry from './PhonebookEntry'

const Phonebook = ({ people, deletePerson }) => {
    //Persons is an object -- does not have a length 
    console.log('people:', people)
    if(people.length === 0 || typeof people === 'undefined')
    return(
        <div></div>
    )
    
    
    const{persons} = people
    console.log('hello phonebook persons:', persons, "type:", typeof persons)
    
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