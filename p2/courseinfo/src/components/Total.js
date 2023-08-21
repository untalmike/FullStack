import React from 'react'

const Total = ({parts}) => {
    const totalParts = parts.reduce((sum, order) => sum + order.exercises, 0)
    return (
        <p><b>Total of</b> <span>{totalParts}</span> <b>exercises</b></p>
    )
}

export default Total