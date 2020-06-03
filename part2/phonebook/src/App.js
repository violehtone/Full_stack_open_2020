
import React, { useState, useEffect } from 'react'
import PersonList from './components/PersonList'
import personService from './services/persons'

const App = () => {
    const [ persons, setPersons ] = useState([])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')

    const hook = () => {
      personService
        .getAll()
        .then(initialPersons => {
          console.log('promise fulfilled')
          setPersons(initialPersons)
        })
        .catch(error => {
          console.log('fail', error)
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
          personService
            .create(personObject)
            .then(returnedPerson => {
              setPersons(persons.concat(returnedPerson))
              setNewName('')
              setNewNumber('')
            })
            .catch(error => {
              console.log('fail', error)
            })
        }}

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const del = () => {
      console.log("Click!")
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
        <PersonList persons = {persons} del = {del} />
      </div>
    )
  }
  
  export default App