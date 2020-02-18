import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const onClickAdd = (event) => {
    event.preventDefault()
    if (persons.find((p) => p.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const newPerson = { name: newName, number: newNumber }
      setPersons([...persons, newPerson])
      setNewName('')
      setNewNumber('')
    }
  }

  const onChangeSearch = (event) => {
    setNewSearch(event.target.value)
  }

  const onChangeName = (event) => {
    setNewName(event.target.value)
  }

  const onChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const showPersons = () => {
    const reg = new RegExp(newSearch, 'i')
    return persons.filter((person) => person.name.match(reg)).map((person) => <div key={person.name}>{person.name} {person.number}</div>)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        filter shown with
        <input value={newSearch} onChange={onChangeSearch} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={onClickAdd}>
        <div>
          name: <input value={newName} onChange={onChangeName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={onChangeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {showPersons()}
    </div>
  )
}

export default App