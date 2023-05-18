
// src/components/CustomerDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CustomerDetails() {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    fetchCustomer();
  }, []);

  const fetchCustomer = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/customers/${id}`);
      setCustomer(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!customer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Customer Details</h2>
      <p>ID: {customer.id}</p>
      <p>Name: {customer.first_name} {customer.last_name}</p>
      <p>City: {customer.city}</p>
      <p>Company: {customer.company}</p>
      {/* Add back button */}
    </div>
  );
}

export default CustomerDetails;