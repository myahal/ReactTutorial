import React, { useState } from 'react'
import PersonService from '../services/person'

const PersonForm = ({ persons, setPersons }) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const onClickAdd = (event) => {
        event.preventDefault()
        if (persons.find((p) => p.name === newName)) {
            if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one ?`)) {
                const person = persons.find((p) => p.name === newName)
                const changedPerson = { ...person, number: newNumber }
                PersonService.update(person.id, changedPerson)
                    .then(returnedPerson => {
                        setPersons(persons.map(p => p.id !== person.id ? p : returnedPerson))
                        setNewName('')
                        setNewNumber('')
                    })
            }
        } else {
            const newPerson = { name: newName, number: newNumber }
            PersonService.create(newPerson)
                .then(returnedPerson => {
                    setPersons([...persons, returnedPerson])
                    setNewName('')
                    setNewNumber('')
                })
        }
    }

    const onChangeName = (event) => {
        setNewName(event.target.value)
    }

    const onChangeNumber = (event) => {
        setNewNumber(event.target.value)
    }
    return (
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
    )
}

export default PersonForm