import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import EditCustomer from './EditCustomer';

const CustomerDetails = ({ match }) => {
  const [customer, setCustomer] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchCustomer = async () => {
      const response = await axios.get(`/api/customers/${match.params.id}`);
      setCustomer(response.data);
    };

    fetchCustomer();
  }, [match.params.id]);

  const handleCustomerUpdated = () => {
    setIsEditing(false);
    setCustomer(null);
    fetchCustomer();
  };

  return (
    <div>
      {customer ? (
        <div>
          {!isEditing ? (
            <div>
              <h1>Customer Details</h1>
              <p>
                <strong>Name:</strong> {`${customer.first_name} ${customer.last_name}`}
              </p>
              <p>
                <strong>City:</strong> {customer.city}
              </p>
              <p>
                <strong>Company:</strong> {customer.company}
              </p>
              <p>
                <strong>File:</strong> {customer.file || 'N/A'}
              </p>
              <button onClick={() => setIsEditing(true)}>Edit Customer</button>
            </div>
          ) : (
            <EditCustomer customerId={customer.id} onCustomerUpdated={handleCustomerUpdated} />
          )}
          <Link to="/">Back to Dashboard</Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CustomerDetails;
