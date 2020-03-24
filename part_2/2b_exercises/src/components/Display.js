import React from 'react'

const Display = (props) => {
    return(
        <div>
            {props.persons.map((person, i) => <p id = {i}>{person.name}: {person.number}</p>)}
        </div>
    )
}

export default Display