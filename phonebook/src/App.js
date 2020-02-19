import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonService from './services/person'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newSearch, setNewSearch] = useState('')
  const [errorMessage, setErrorMessage] = useState({
    message: null,
    stat: false
  })

  useEffect(() => {
    PersonService.getAll()
      .then(data => {
        setPersons(data)
      })
  }, [])

  return (
    <div>
      <Notification errorMessage={errorMessage} />
      <h1>Phonebook</h1>
      <Filter newSearch={newSearch} setNewSearch={setNewSearch} />
      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} setErrorMessage={setErrorMessage} />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={newSearch} setPersons={setPersons} setErrorMessage={setErrorMessage} />
    </div>
  )
}

export default App