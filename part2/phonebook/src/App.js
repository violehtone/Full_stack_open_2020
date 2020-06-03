
import React, { useState } from 'react'
import PersonList from './components/PersonList'

const App = (props) => {
    const [ persons, setPersons ] = useState(props.persons)
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        
        const personObject = {
            name: newName,
            number: newNumber
        }
    
        let duplicate = persons.some(person => person.name === newName)

        if(duplicate) {
            window.alert(`${newName} is already in phonebook`)
        }else{
            setPersons(persons.concat(personObject))
            setNewName('')
            setNewNumber('')
        }}

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }
  
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit = {addPerson}>
          <div> name: <input value = {newName} onChange = {handleNameChange}/> </div>
          <div> number: <input value = {newNumber} onChange = {handleNumberChange} /> </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        <PersonList persons = {persons} />
      </div>
    )
  }
  
  export default App