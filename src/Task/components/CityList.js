
// src/components/CityList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CityList() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/cities');
      setCities(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>City List</h2>
      <ul>
        {cities.map(city => (
          <li key={city.city}>
            {city.city} - {city.count} customers
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CityList;