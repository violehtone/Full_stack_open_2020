import React from 'react'
import Person from './Person'

const PersonList = ({persons, del}) => {
    return(
        <ul>
        {persons.map(person =>
            <Person name = {person.name} number = {person.number} />)}
        </ul>
    )}

export default PersonList