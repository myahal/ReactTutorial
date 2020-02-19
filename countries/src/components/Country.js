import React from 'react'

const Country = ({ country, setFilter }) => {
    const onClick = () => {
        setFilter(country.name)
    }
    return (
        <div >
            {country.name}
            <button onClick={() => onClick()}>show</button>
        </div>
    )
}

export default Country