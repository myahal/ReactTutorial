import React from 'react'

const Persons = ({ filter, persons }) => {
    const showPersons = () => {
        const reg = new RegExp(filter, 'i')
        return persons.filter((person) => person.name.match(reg)).map((person) => <div key={person.name}>{person.name} {person.number}</div>)
    }
    return (
        <div>
            {showPersons()}
        </div>
    )
}

export default Persons