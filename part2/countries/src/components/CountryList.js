import React from 'react'
import Country from './Country'

const CountryList = ({countries}) => {
    if(countries.length > 10) {
        return(<p> Too many countries to show </p>)
    }else if(countries.length === 1){
        return(
            <div> 
                <h1> {countries[0].name} </h1>
                <p> Capital: {countries[0].capital}</p>
                <p> Population: {countries[0].population}</p>
                <h2> languages </h2>
                <ul> {countries[0].languages.map(language => 
                    <li> {language.name} </li>)}
                </ul>
                <img src= {countries[0].flag} width = "150" height = "100" alt = "Flag"/>
            </div>
        )
    }else{
        return(
        <div>
            <ul> 
                {countries.map(country => 
                <Country name = {country.name}/>,
                )}
            </ul>
        </div>
        )
    }
}

export default CountryList