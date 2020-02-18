import React, { useState, useEffect } from 'react';
import axios from 'axios'

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        const data = response.data
        setCountries(data)
      })
  }, [])

  const onChangeFilter = (event) => {
    setFilter(event.target.value)
  }

  const showCountries = () => {
    const reg = RegExp(filter, 'i')
    const filtered = countries.filter((country) => {
      return country.name.match(reg)
    })
    if (filtered.length > 10) {
      return <div>Too many matches, specify another filter</div>
    } else if (filtered.length === 1) {
      return showCountry(filtered[0])
    } else {
      return filtered.map((country) => <div key={country.topLevelDomain}>{country.name}</div>)
    }
  }

  const showCountry = (country) => {
    return (
      <>
        <h2 >{country.name}</h2>
        <div>capital {country.capital}</div>
        <div>population {country.population}</div>
        <h3>languages</h3>
        <ul>
          {country.languages.map((lang) => <li key={lang.iso639_1}>{lang.name}</li>)}
        </ul>
      </>
    )
  }

  return (
    <div>
      <div>
        find countries
        <input value={filter} onChange={onChangeFilter} />
      </div>
      {showCountries()}
    </div>
  );
}

export default App;
