import React from 'react'

const Person = ({name, number, del}) => {
    return(
        <li> 
            {name} {number}
            <button onClick = {del}> delete </button>
         </li>
    )}

export default Person