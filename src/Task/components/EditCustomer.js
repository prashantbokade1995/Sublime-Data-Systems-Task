
// src/components/EditCustomer.js
import React, { useState } from 'react';
import axios from 'axios';

function EditCustomer() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [company, setCompany] = useState('');
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleFirstNameChange = e => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = e => {
    setLastName(e.target.value);
  };

  const handleCityChange = e => {
    setCity(e.target.value);
  };

  const handleCompanyChange = e => {
    setCompany(e.target.value);
  };

  const handleFileChange = e => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('city', city);
    formData.append('company', company);
    formData.append('file', file);

    try {
      await axios.post('http://localhost:5000/api/customers/edit', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setSuccessMessage('Customer updated successfully');
      // Reset form values
      setFirstName('');
      setLastName('');
      setCity('');
      setCompany('');
      setFile(null);
    } catch (error) {
      console.error(error);
      setErrorMessage('Error updating customer');
    }
  };

  return (
    <div>
      <h2>Edit Customer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" value={lastName} onChange={handleLastNameChange} />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input type="text" id="city" value={city} onChange={handleCityChange} />
        </div>
        <div>
          <label htmlFor="company">Company:</label>
          <input type="text" id="company" value={company} onChange={handleCompanyChange} />
        </div>
        <div>
          <label htmlFor="file">Upload File:</label>
          <input type="file" id="file" onChange={handleFileChange} />
        </div>
        <button type="submit">Save</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default EditCustomer;
