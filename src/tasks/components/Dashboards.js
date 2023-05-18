import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchCustomers = async () => {
      const response = await axios.get('/api/customers');
      setCustomers(response.data);
      setTotalPages(Math.ceil(response.data.length / perPage));
    };

    fetchCustomers();
  }, [perPage]);

  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
  };

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const filteredCustomers = customers.filter(
    customer =>
      customer.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastCustomer = currentPage * perPage;
  const indexOfFirstCustomer = indexOfLastCustomer - perPage;
  const currentCustomers = filteredCustomers.slice(indexOfFirstCustomer, indexOfLastCustomer);

  return (
    <div>
      <h1>Customer Dashboard</h1>
      <div>
        <input type="text" placeholder="Search by Name or City" value={searchTerm} onChange={handleSearchChange} />
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
            <th>Company</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentCustomers.map(customer => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>
                {customer.first_name} {customer.last_name}
              </td>
              <td>{customer.city}</td>
              <td>{customer.company}</td>
              <td>
                <Link to={`/customer/${customer.id}`}>View Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
          <button key={page} onClick={() => handlePageChange(page)}>
            {page}
          </button>
        ))}
      </div>
      <div>
        <Link to="/cities">City List</Link>
      </div>
    </div>
  );
};

export default Dashboard;
