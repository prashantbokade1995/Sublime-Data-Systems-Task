import React, { useState } from 'react';
import axios from 'axios';

const EditCustomer = ({ customerId, onCustomerUpdated }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    city: '',
    company: '',
    file: null
  });

  const handleInputChange = e => {
    if (e.target.type === 'file') {
      setFormData({ ...formData, file: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const { first_name, last_name, city, company, file } = formData;

    const updatedCustomerData = {
      first_name,
      last_name,
      city,
      company
    };

    // Create form data to send with the request
    const formData = new FormData();
    formData.append('first_name', updatedCustomerData.first_name);
    formData.append('last_name', updatedCustomerData.last_name);
    formData.append('city', updatedCustomerData.city);
    formData.append('company', updatedCustomerData.company);
    formData.append('file', file);

    try {
      await axios.put(`/api/customers/${customerId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      onCustomerUpdated();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Edit Customer</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input type="text" name="first_name" onChange={handleInputChange} required />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" name="last_name" onChange={handleInputChange} required />
        </div>
        <div>
          <label>City</label>
          <input type="text" name="city" onChange={handleInputChange} required />
        </div>
        <div>
          <label>Company</label>
          <input type="text" name="company" onChange={handleInputChange} required />
        </div>
        <div>
          <label>File</label>
          <input type="file" name="file" onChange={handleInputChange} />
        </div>
        <button type="submit">Update Customer</button>
      </form>
    </div>
  );
};

export default EditCustomer;
