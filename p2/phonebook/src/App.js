import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {

  const [ persons, setPersons ] = useState([]) 
  const [ finder, setFinder ] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const hookPerson = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(res => {
        setPersons(res.data)
        console.log(res.data)
      })
  }

  useEffect(hookPerson, [])
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        finder={finder}
        setFinder={setFinder}
      />

      <h2>Add a new</h2>
      <PersonForm 
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
      />

      <h2>Numbers</h2>
      <Persons
        persons={persons}
        finder={finder}
      />

    </div>
  )
}

export default App