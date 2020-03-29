import React from 'react'

const Person = ({name, number, delFunc }) => {
    return(
        <div>
            <p> {name}: {number} </p>
            <button onClick = {delFunc}>Delete</button>
        </div>
    )
}

export default Person