import React from 'react'

const Display = (props) => {
    return(
        <div>
            {props.persons.map((person, i) => 
            <div>
                <p id = {i}>{person.name}: {person.number} </p>
                <button>Delete</button>
            </div>
            )}
        </div>
    )
}

export default Display