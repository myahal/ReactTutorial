import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const onClickAdd = (event) => {
    event.preventDefault()
    const newPerson = { name: newName }
    setPersons([...persons, newPerson])
    setNewName('')
  }

  const onChangeName = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={onClickAdd}>
        <div>
          name: <input value={newName} onChange={onChangeName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => <div key={person.name}>{person.name}</div>)}
    </div>
  )
}

export default App