import React from 'react'

const Filter = ({ newSearch, setNewSearch }) => {
    const onChangeSearch = (event) => {
        setNewSearch(event.target.value)
    }


    return (
        <div>
            filter shown with
            <input value={newSearch} onChange={onChangeSearch} />
        </div>
    )
}

export default Filter