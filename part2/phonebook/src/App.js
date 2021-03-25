import React, { useState } from 'react'
import SearchFilter from './components/SearchFilter'
import Form from './components/Form'
import Phonebook from './components/Phonebook'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [search, setSearch] = useState('')

  const setToNewName = (e) => { setNewName(e.target.value) }
  const setToNewPhone = (e) => { setNewPhone(e.target.value) }


  const setToPerson = e => {
    e.preventDefault()

    if (persons.filter(person => person.name.toLowerCase() === (newName.toLowerCase())).length > 0) {
      alert(`${newName} is already added to the phonebook`)
      return;
    }

    const newPerson = {
      name: newName,
      phone: newPhone
    }

    const personCopy = [...persons, newPerson]
    setPersons(personCopy)
  }

  const setToSearch = e => {
    const searchTerm = e.target.value
    const searchMatch = persons.filter(person => person.name.toUpperCase().includes(searchTerm.toUpperCase()))
    setPersons(searchMatch)
    setSearch(searchTerm)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter value={search} onChange={setToSearch}/>
      <Form onSubmit={setToPerson} value={[newName, newPhone]} onChange={[setToNewName, setToNewPhone]}/>
      <Phonebook persons={persons}/>
    </div>
  )
}

export default App