import React from 'react'
import Person from './Person'
import PersonService from '../services/person'

const Persons = ({ filter, persons, setPersons }) => {
    const deleteHandler = (person) => {
        if (window.confirm(`delete ${person.name}`)) {
            PersonService.deletePerson(person.id)
                .then(_ =>
                    setPersons(persons.filter(p => p.id !== person.id)))
        }
    }

    const showPersons = () => {
        const reg = new RegExp(filter, 'i')
        return persons.filter((person) => person.name.match(reg)).map((person) => <Person key={person.id} name={person.name} number={person.number} deleteHandler={() => deleteHandler(person)} />)
    }
    return (
        <div>
            {showPersons()}
        </div>
    )
}

export default Persons