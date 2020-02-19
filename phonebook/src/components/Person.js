import React from 'react'

const Person = ({ name, number, deleteHandler }) => {
    return (
        <div>
            {name} {number} <button onClick={deleteHandler}>delete</button>
        </div>
    )
}

export default Person