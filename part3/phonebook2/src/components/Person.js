import React from 'react'

const Person = ({person, remove}) => {
    return(
    <li className = "person" key = {person.id}>
        {person.name} {person.number}
        <button onClick = {remove}> delete </button>
    </li>
    )
}

export default Person