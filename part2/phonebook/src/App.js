import React, { useState, useEffect } from 'react'
import SearchFilter from './components/SearchFilter'
import Form from './components/Form'
import Phonebook from './components/Phonebook'
import personService from './services/phone'
import Notification from './components/Notification'

const App = () => {

  // TODO: Rename persons to people....come on lol. 
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('')
  const [warning, setWarning] = useState(false)

  useEffect(() => {
    document.title = 'Phonebook'
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
      .catch(error => {
        console.log('error:', error)
      })
  }, [])

  const setToNewName = (e) => { setNewName(e.target.value) }
  const setToNewPhone = (e) => { setNewPhone(e.target.value) }

  const formatName = (name) => {
    let fullName = name.split(' ')
    if (fullName.length > 1) {
      let firstName = fullName[0].charAt(0).toUpperCase() + fullName[0].slice(1).toLowerCase()
      let lastName = fullName[fullName.length - 1].charAt(0).toUpperCase() + fullName[fullName.length - 1].slice(1).toLowerCase()

      return `${firstName} ${lastName}`
    }
    else {
      return fullName[0].charAt(0).toUpperCase() + fullName[0].slice(1).toLowerCase()

    }
  }

  const existingPerson = (id) => {
    
    const msg = `${formatName(newName)} is already added to the phonebook - replace the old number with a new one?`

    if (window.confirm(msg)) {

      const newNumber = {
        phone: newPhone
      }
      personService.update(id, newNumber)
        .then(updatedContact => {
          setPersons(persons.map(p => p.id !== id ? p : updatedContact))
        })
      setMessage(`Updated ${formatName(newName)}'s number to ${newPhone}`)
      clearMessage()
      resetFields()
    }
  }

  const resetFields = () => {
    setNewName('')
    setNewPhone('')
  }

  const createNewPerson = (newPerson) => {
    personService.create(newPerson)
      .then(returnedPerson => setPersons(persons.concat(returnedPerson)))
    resetFields()
    setMessage(`Added ${newPerson.name}`)
    clearMessage()
  }

  const checkPersonExists = () => {
    const match = persons.filter(person => person.name.toUpperCase() === newName.toUpperCase())
    if (match.length > 0) {
      return {
        isFound: true,
        id: match[0].id
      }
    }
    return {
      isFound: false,
      id: null
    }
  }

  const setToPerson = e => {
    e.preventDefault()
    let checkPerson = checkPersonExists()
    if (checkPerson.isFound) {
      existingPerson(checkPerson.id)
    }
    else {
      const newPerson = {
        // Is it conventional to pass value to name property with a function call
        name: formatName(newName),
        phone: newPhone
      }
      createNewPerson(newPerson)
    }
  }

  const clearMessage = () => {
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  const setToSearch = e => {
    const searchTerm = e.target.value
    const searchMatch = persons.filter(person => person.name.toUpperCase().includes(searchTerm.toUpperCase()))
    setPersons(searchMatch)
    setSearch(searchTerm)
  }

  const deletePerson = e => {
    const id = e.target.id
    const delPerson = persons.filter(p => p.id === id)
    const name = delPerson[0].name
    personService.del(id)
      .then(() => {
        setMessage(`${name} has been deleted.`)
        clearMessage()
      })
      .catch(() => {
        setWarning(!warning)
        setMessage(`Information of ${formatName(name)} has already been removed from the server. `)
        clearMessage()
      })
    setPersons(persons.filter(p => p.id !== id))
    setMessage('')
  }

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