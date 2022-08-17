import logo from './logo.svg';
import './App.css';
import cities from 'cities.json';
import React, { useState } from 'react';

function App() {
  // the value of the search field 
  const [name, setName] = useState('');

  // the search result
  const [foundCities, setFoundCities] = useState();

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = cities.filter((city) => {
        return city.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      const topten = results.slice(0, 10);
      setFoundCities(topten);
    } else {
      setFoundCities();
      // If the text field is empty, show all cities
    }

    setName(keyword);
  };

  return (
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />

      <div className="city-list">
        {foundCities && foundCities.length > 0 ? (
          foundCities.map((city) => (
            <li key={city.id} className="city">
              <span className="city-country">{city.country}</span>
              <span className="city-name">{city.name}</span>
              <span className="city-latlng">Latitude: {city.lat}<br></br>Longitude: {city.lng}</span>
            </li>
          ))
        ) : ((name == '') ? (<h1>Input keyword!</h1>) : (
          <h1>No results found!</h1>
        ))}
      </div>
    </div>
  );
}

export default App;
