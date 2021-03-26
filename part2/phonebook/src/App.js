import React, { useState, useEffect } from 'react'
import SearchFilter from './components/SearchFilter'
import Form from './components/Form'
import Phonebook from './components/Phonebook'
import axios from 'axios'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() =>{
    axios
    .get('http://localhost:3001/persons')
    .then(response =>{
      const getPersons = response.data
      setPersons(getPersons)
    })
  },[])

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
    setNewName('')
    setNewPhone('')
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
      <h2>add a new</h2>
      <Form onSubmit={setToPerson} value={[newName, newPhone]} onChange={[setToNewName, setToNewPhone]}/>
      <h2>Numbers</h2>
      <Phonebook persons={persons}/>
    </div>
  )
}

export default App