import React from 'react'

const Person = ({name, number}) => {
    return(
        <li> 
            {name} {number}
            <button> delete </button>
         </li>
    )}

export default Person