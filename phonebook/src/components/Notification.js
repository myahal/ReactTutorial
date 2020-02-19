import React from 'react'

const Notification = ({ errorMessage }) => {
    const { message, stat } = errorMessage
    const style = {
        color: stat ? 'red' : 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    if (message === null) {
        return null
    }
    return (
        <div style={style}>
            {message}
        </div>
    )
}

export default Notification