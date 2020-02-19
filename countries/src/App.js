import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Country from './components/Country'

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  const filterCountries = () => {
    const reg = RegExp(filter, 'i')
    return countries.filter((country) => {
      return country.name.match(reg)
    })
  }

  const countriesToShow = filter
    ? filterCountries()
    : countries

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

  const disp = () => {
    if (countriesToShow.length > 10) {
      return <div>Too many matches, specify another filter</div>
    } else if (countriesToShow.length === 1) {
      return showCountry(countriesToShow[0])
    } else {
      return countriesToShow
        .map((c) => <Country country={c} setFilter={setFilter} key={c.topLevelDomain} />)
    }
  }

  const showCountry = (country) => {
    if (country) {
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
  }

  return (
    <div>
      <div>
        find countries
        <input value={filter} onChange={onChangeFilter} />
      </div>
      {disp()}
    </div>
  );
}

export default App;
