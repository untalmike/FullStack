import React from 'react'

const Persons = ({persons, finder}) => {
    
    const generalInfo = persons.map( person => person )
    const filterInfo = generalInfo.filter(display => (display.name.toLowerCase().includes(`${finder}`)))

    return (
        <div>
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

export default Persons