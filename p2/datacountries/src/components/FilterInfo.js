import Filtered from './Filtered'
import Country from './Country'

const FilterInfo = ({filterInfo}) => {
    const filtered = filterInfo.map(countrie => countrie)

    return (
        <div>
            {filtered.length === 1 ?
                <Country filtered={filtered}/>
                :
                <Filtered filtered={filtered}/>
            }

        </div>
    )
}

export default FilterInfo