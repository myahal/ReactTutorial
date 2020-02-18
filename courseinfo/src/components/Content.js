import React from 'react'
import Part from './Part '

const Content = (props) => {
    return (
        <div>
            {props.course.parts.map((part) => <Part part={part.name} exercises={part.exercises} key={part.id} />)}
        </div>
    )
}

export default Content