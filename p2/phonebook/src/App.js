import React, { useState, useEffect } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-1234567' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ finder, setFinder ] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleName = (e) => {
    setNewName(e.target.value)
  }

  const handleNumber = (e) => {
    setNewNumber(e.target.value)
  }

  const changeFinder = (e) => {
    setFinder(e.target.value)
  }

  const generalInfo = persons.map( person => person )
  const filterInfo = generalInfo.filter(display => (display.name.toLowerCase().includes(`${finder}`)))

  const addName = (e) => {
    e.preventDefault()
    
    const newPerson = {
      name: newName,
      number: newNumber
    }
    const sameName = persons.find(person => person.name === newPerson.name)

    if(sameName){
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
    
  }

  

  return (
    <div>
      <h2>Phonebook</h2>
      <div>Filter shown with: <input type='search' value={finder} onChange={changeFinder}/></div>

      <h2>Add a new</h2>
      <form onSubmit={addName}>
        <div>name: <input onChange={handleName} value={newName}/></div>
        <div>number: <input onChange={handleNumber} value={newNumber}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
        {
          finder === ""
          ?
            generalInfo.map(general => <p key={general.name}>{general.name} {general.number}</p>)
          :
            filterInfo.map(info => <p key={info.name}>{info.name} {info.number}</p>)
        }

    </div>
  )
}

export default App