import React, { useState, useEffect } from 'react'
import SearchFilter from './components/SearchFilter'
import Form from './components/Form'
import Phonebook from './components/Phonebook'
import personService from './services/phone'
import Notification from './components/Notification'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('')
  const [warning, setWarning] = useState(false)

  useEffect(() => {
    console.log('Calling on personService...')
    personService
      .getAll()
      .then(initialPersons => {
        console.log('useEffect data:', initialPersons)
        setPersons(initialPersons)
        console.log("When we fetch initially:", initialPersons)
      })
      .catch(error => {
        console.log('error', error)
      })
  }, [])

  const setToNewName = (e) => { setNewName(e.target.value) }
  const setToNewPhone = (e) => { setNewPhone(e.target.value) }

  const existingPerson = () => {
    const match = persons.filter(person => person.name.toLowerCase() === (newName.toLowerCase()))

    if (match.length > 0) {
      const phoneMatch = (match[0].phone === newPhone)
      if (!phoneMatch) {
        const msg = `${match[0].name} is already added to the phonebook - replace the old number with a new one?`
        if (window.confirm(msg)) {
          const newPerson = {
            name: match[0].name,
            phone: newPhone
          }
          // Comparing names for now since only the phone has been updated
          personService.update(match[0].id, newPerson).then(newP => setPersons(persons.map(p => (p.id !== newP.id) ? p : newP)))

        }
      }
      setMessage(`${match.name} is already added to the phone book - ${newPhone} is already added to the phone book `)
      setWarning(!warning)
      return false
    }
    return true
  }

  const setToPerson = e => {
    e.preventDefault()
    if (existingPerson()) {
      const newPerson = {
        name: newName,
        phone: newPhone
      }

      personService.create(newPerson).then(returnedPerson => setPersons(persons.concat(returnedPerson)))
      setNewName('')
      setNewPhone('')
      setMessage(`Added ${newPerson.name}`)
      clearMessage()
    }
  }

  const clearMessage = () => {
    setTimeout(() => {
      setMessage(null)
    },5000 )
  }

  const setToSearch = e => {
    const searchTerm = e.target.value
    const searchMatch = persons.filter(person => person.name.toUpperCase().includes(searchTerm.toUpperCase()))
    setPersons(searchMatch)
    setSearch(searchTerm)
  }

  const deletePerson = e => {
    const id = parseInt(e.target.id)
    const delPerson = persons.filter(p => p.id === id)
    personService.del(id)
      .then(person =>{
        setMessage(`${person.name} has been deleted.`)
      })
      .catch(() => {
        setWarning(!warning)
        setMessage(`Information of ${delPerson.name} has already been removed from the server. `)
        clearMessage()
      })
    setPersons(persons.filter(p => p.id !== id))
    setMessage('')
  }
  console.log('value of persons:', persons)



  return (
    <div>
      <h2>Phonebook</h2>
      {(message === "") ? null : <Notification message={message} warning={warning} />}
      <SearchFilter value={search} onChange={setToSearch} />
      <h2>add a new</h2>
      <Form onSubmit={setToPerson} value={[newName, newPhone]} onChange={[setToNewName, setToNewPhone]} />
      <h2>Numbers</h2>
      <Phonebook people={persons} deletePerson={deletePerson} />
    </div>
  )
}

export default App