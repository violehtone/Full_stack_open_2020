
import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import personService from './services/persons'

const App = () => {
    const [ persons, setPersons ] = useState([])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ errorMessage, setErrorMessage] = useState(null)

    const hook = () => {
      personService
        .getAll()
        .then(initialPersons => {
          setPersons(initialPersons)
        })
        .catch(error => {
          setErrorMessage("Error occurred")
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
    }

    useEffect(hook, [])

    const Notification = ({ message }) => {
      if (message === null) {
        return null
      }
      return (
        <div className = "error">
          {message}
        </div>
      )}

    const addPerson = (event) => {
        event.preventDefault()
        
        let idmax = persons.reduce((maxId, person) => Math.max(maxId, person.id), 0)

        const personObject = {
            name: newName,
            number: newNumber,
            id: idmax + 1
        }

        console.log("Addind a person: ", personObject)
    
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
              setErrorMessage(`Added '${newName}`)
              setTimeout(() => {
                setErrorMessage(null)
              }, 5000)
            })
            .catch(error => {
              console.log('fail', error)
            })
        }}

    const deletePersonById = (id) => {
      const person = persons.find(p => p.id === id)
      personService
        .remove(id)
        .then(response => {
          setPersons(persons.filter(p => p.id !== id))
          console.log("Deleting a person: ", person)
        })
        .catch(error => {
          if(error.response) {
            console.log(error.response.data)
          }
        })
    }
    

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }
  
    return (
      <div>
        <h2>Phonebook</h2>
        <Notification message = {errorMessage} />
        <form onSubmit = {addPerson}>
          <div> name: <input value = {newName} onChange = {handleNameChange}/> </div>
          <div> number: <input value = {newNumber} onChange = {handleNumberChange} /> </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        <ul>
        {persons.map((person) =>
          <Person key = {person.id} person = {person} remove = {() => deletePersonById(person.id)}/>
        )}
        </ul>
      </div>
    )
  }
  
  export default App