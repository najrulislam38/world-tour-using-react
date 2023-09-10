import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountries = (country) => {
    // console.log('add this to your visited country.');
    console.log(country);
    const newVisitedCountry = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountry);
    
  };

  const handleVisitedFlag = flag => {
    // console.log(flag);
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  }

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h3>Counties: {countries.length}</h3>
      {/* visited countries */}
      <div className="country-name-container">
        <h4>Visited country: {visitedCountries.length}</h4>
        <ul>
            {
                visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
            }
        </ul>
      </div>
      <div className="country-flag-container">
            {
                visitedFlags.map((country , idx)=> <img key={idx} src={country} />)
            }
      </div>
      {/* display countries */}
      <div className="country-container">
        {countries.map((country) => (
          <Country country={country} 
          handleVisitedCountry={handleVisitedCountries}
          handleVisitedFlag = {handleVisitedFlag}
          key={country.cca2}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
