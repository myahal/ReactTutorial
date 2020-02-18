import React from 'react'

const Country = ({ country, setShowCountries }) => {
    const onClick = () => {
        setShowCountries([country])
    }
    return (
        <div >
            {country.name}
            <button onClick={() => onClick()}>show</button>
        </div>
    )
}

export default Country