import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      const response = await axios.get('/api/customers');
      setCustomers(response.data);
    };

    fetchCustomers();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>
                <Link to={`/customer/${customer.id}`}>{`${customer.first_name} ${customer.last_name}`}</Link>
              </td>
              <td>{customer.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const CustomerDetails = ({ match }) => {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const fetchCustomer = async () => {
      const response = await axios.get(`/api/customers/${match.params.id}`);
      setCustomer(response.data);
    };

    fetchCustomer();
  }, [match.params.id]);

  return (
    <div>
      <h1>Customer Details</h1>
      {customer ? (
        <div>
          <p>
            <strong>Name:</strong> {`${customer.first_name} ${customer.last_name}`}
          </p>
          <p>
            <strong>City:</strong> {customer.city}
          </p>
          <p>
            <strong>Company:</strong> {customer.company}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Link to="/">Back to Dashboard</Link>
    </div>
  );
};

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

const TaskApp = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Dashboard} />
        <Route path="/customer/:id" component={CustomerDetails} />
        <Route path="/cities" component={CityList} />
      </Routes>
    </Router>
  );
};

export default TaskApp;
