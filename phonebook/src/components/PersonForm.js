import React, { useState } from 'react'

const PersonForm = ({ persons, setPersons }) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

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