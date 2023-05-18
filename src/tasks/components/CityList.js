import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CityList = () => {
  const [cityData, setCityData] = useState({});

  useEffect(() => {
    const fetchCityData = async () => {
      const response = await axios.get('/api/customers/cities');
      setCityData(response.data);
    };

    fetchCityData();
  }, []);

  return (
    <div>
      <h1>City List</h1>
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>No. of Customers</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(cityData).map(([city, count]) => (
            <tr key={city}>
              <td>{city}</td>
              <td>{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CityList;
