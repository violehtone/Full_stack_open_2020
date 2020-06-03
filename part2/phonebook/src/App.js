
import React, { useState, useEffect } from 'react'
import PersonList from './components/PersonList'
import axios from 'axios'

const App = () => {
    const [ persons, setPersons ] = useState([])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')

    const hook = () => {
        console.log('effect')
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                console.log('promise fulfilled')
                setPersons(response.data)
            })
    }

    useEffect(hook, [])


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