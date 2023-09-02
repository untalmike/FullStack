

const Filtered = ({filtered}) => {
    
    return (
        <div>
            {filtered.map(filter => (<p key={filter.name.common}>{filter.name.common}</p>))}
        </div>
    )
}

export default Filtered