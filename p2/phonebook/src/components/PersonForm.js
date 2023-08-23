import React from 'react'

const PersonForm = ({newName, setNewName, newNumber, setNewNumber, persons, setPersons}) => {

    const handleName = (e) => {
        setNewName(e.target.value)
    }

    const handleNumber = (e) => {
        setNewNumber(e.target.value)
    }

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
    
    return(
        <form onSubmit={addName}>
            <div>name: <input onChange={handleName} value={newName}/></div>
            <div>number: <input onChange={handleNumber} value={newNumber}/></div>
            <div><button type="submit">add</button></div>
      </form>

    )
}

export default PersonForm