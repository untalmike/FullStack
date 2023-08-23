import React from 'react'

const Filter = ({finder, setFinder}) => {
    
    const changeFinder = (e) => {
        setFinder(e.target.value)
    }

    return (
        <div>Filter shown with: <input type='search' value={finder} onChange={changeFinder}/></div>
    )
}

export default Filter