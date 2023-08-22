import React from 'react'

const Total = ({parts}) => {
    const totalParts = parts.reduce((sum, order) => sum + order.exercises, 0)
    return (
        <p style={{fontWeight:'bold'}}>Total of {totalParts} exercises</p>
    )
}

export default Total