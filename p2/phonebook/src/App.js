import React, { useState, useEffect } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleChange = (e) => {
    setNewName(e.target.value)
  }

  const addName = (e) => {
    e.preventDefault()
    
    const newPerson = {
      name: newName
    }
    const sameName = persons.find(person => person.name === newPerson.name)

    if(sameName){
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(newPerson))
      setNewName('')
    }
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input onChange={handleChange} value={newName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map((person, i) => {
          const {name} = person
            return(
              <p key={i}>{name}</p>
              )
            })
          }
    </div>
  )
}

export default App