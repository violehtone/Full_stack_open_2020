import React from 'react'
import Country from './Country'

const CountryList = ({countries}) => {
    if(countries.length > 10) {
        return(<p> Too many countries to show </p>)
    }else{
        return(<ul> {countries.map(country => <Country name = {country.name}/>)} </ul>
        )
    }
}

export default CountryList