import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FilterInfo from './components/FilterInfo'

function App() {
  const [ countries, setCountries ] = useState([])
  const [ findCountrie, setFindCountrie] = useState('')

  const dataCountries = () => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(res => {
        setCountries(res.data)
      })
  }

  useEffect(dataCountries, []);

  const handleFindCountrie = (e) => {
    setFindCountrie(e.target.value)
  }
  
  const filterInfo = countries.filter(countrie => (countrie.name.common.toLowerCase().includes(`${findCountrie}`)))

  return (
    <div>
      <div>Find countries: <input value={findCountrie} onChange={handleFindCountrie} /></div>
      {filterInfo.length > 10 ? (<p>To many matches, specify another filter</p>) : <FilterInfo filterInfo={filterInfo} />}
    </div>
  );
}

export default App;
