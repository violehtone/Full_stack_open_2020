import React, {useState, useEffect} from 'react';
import axios from 'axios'
import CountryList from './components/CountryList';


const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }

  useEffect(hook, [])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const countriesToShow = countries.filter(country => country.name.includes(search) === true)


  return (
    <div>
      <div> find countries: <input value = {search} onChange = {handleSearch}/> </div>
      <div>
        <p> Results:  </p>
        <CountryList countries = {countriesToShow} />
      </div>
    </div>
  );
}

export default App;
