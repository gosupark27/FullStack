import React, { useState, useEffect } from 'react'
import SearchFilter from './components/SearchFilter'
import Form from './components/Form'
import Phonebook from './components/Phonebook'
import personService from './services/phone'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const setToNewName = (e) => { setNewName(e.target.value) }
  const setToNewPhone = (e) => { setNewPhone(e.target.value) }


  const setToPerson = e => {
    e.preventDefault()
    const match = persons.filter(person => person.name.toLowerCase() === (newName.toLowerCase()))
    console.log('match:', match)
    console.log('match phone:', match[0].phone)
    if (match.length > 0) {
      // alert(`${newName} is already added to the phonebook`)
      if (window.confirm(`${match[0].name} is already added to the phonebook - replace the old number with a new one?`)) {
        console.log('newPhone who dis:', newPhone)
        const newPerson = {
          name: match[0].name,
          phone: newPhone
        }
        console.log('newPerson bout to SEND IT!:', newPerson)

        // Comparing names for now since only the phone has been updated
        personService.update(match[0].id, newPerson).then(newP => setPersons(persons.map(p => (p.id !== newP.id) ? p : newP)))
      }
      return;
    }

    const newPerson = {
      name: newName,
      phone: newPhone
    }

    personService.create(newPerson).then(returnedPerson => setPersons(persons.concat(returnedPerson)))
    setNewName('')
    setNewPhone('')
  }

  const setToSearch = e => {
    const searchTerm = e.target.value
    const searchMatch = persons.filter(person => person.name.toUpperCase().includes(searchTerm.toUpperCase()))
    setPersons(searchMatch)
    setSearch(searchTerm)
  }

  const deletePerson = e => {
    const id = parseInt(e.target.id)
    personService.del(id)
    setPersons(persons.filter(p => p.id !== id))
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter value={search} onChange={setToSearch} />
      <h2>add a new</h2>
      <Form onSubmit={setToPerson} value={[newName, newPhone]} onChange={[setToNewName, setToNewPhone]} />
      <h2>Numbers</h2>
      <Phonebook persons={persons} deletePerson={deletePerson} />
    </div>
  )
}

export default App