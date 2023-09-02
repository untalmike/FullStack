import React from 'react'

const Country = ({filtered}) => {
    return(
        <div>
            {filtered.map((filter, i) => (
                <div key={i}>
                    <h1>{filter.name.common}</h1>
                    <p>{filter.capital}</p>

                    <h2>Languages</h2>
                    
                </div>
            ))}
        </div>
    )
}

export default Country