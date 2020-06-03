
import React, { useState } from 'react'

const App = () => {
    const [ persons, setPersons ] = useState([
      { name: 'Arto Hellas' }
    ]) 
    const [ newName, setNewName ] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        
        const personObject = {
            name: newName
        }
    
        let duplicate = persons.some(person => person.name === newName)

        if(duplicate) {
            window.alert(`${newName} is already in phonebook`)
        }else{
            setPersons(persons.concat(personObject))
            setNewName('')
        }}

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
  
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit = {addPerson}>
          <div>
            name: <input value = {newName} onChange = {handleNameChange}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        <ul>
            {persons.map(person => <li> {person.name} </li>)}
        </ul>
        
      </div>
    )
  }
  
  export default App