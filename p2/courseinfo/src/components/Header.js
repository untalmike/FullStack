import React from 'react'

const Header = ({id, name}) => {
  return (
    <div>
      <h1 key={id}>{name}</h1>
    </div>
  )
}

export default Header