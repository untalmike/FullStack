import React from 'react'
import Total from './Total'

const Part = ({parts}) => {
  return (
    <div>
    {parts.map(part => {
      const {id, name, exercises} = part
      return(
        <p key={id}>{name} {exercises}</p>
        )
      })}
      <Total parts={parts} />
    </div>
  )
}

export default Part