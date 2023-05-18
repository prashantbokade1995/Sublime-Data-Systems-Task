
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from 'react-bootstrap/Pagination';

function Dashboard() {
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(5);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/customers');
      const data = Array.isArray(response.data.data) ? response.data.data : [];
      setCustomers(data);
    } catch (error) {
      console.error(error);
      setCustomers([]);
    }
  };

  const handleSearch = e => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredCustomers = customers.filter(customer => {
    const fullName = `${customer.first_name} ${customer.last_name}`.toLowerCase();
    const search = searchTerm.toLowerCase();
    return fullName.includes(search);
  });

  const indexOfLastCustomer = currentPage * perPage;
  const indexOfFirstCustomer = indexOfLastCustomer - perPage;
  const currentCustomers = filteredCustomers.slice(indexOfFirstCustomer, indexOfLastCustomer);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <h2>Customer Dashboard</h2>
      <input type="text" placeholder="Search by name" value={searchTerm} onChange={handleSearch} />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {currentCustomers.map(customer => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.first_name}</td>
              <td>{customer.last_name}</td>
              <td>{customer.city}</td>
              <td>{customer.company}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination>
        <Pagination.First onClick={() => paginate(1)} disabled={currentPage === 1} />
        <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
        {Array.from({ length: Math.ceil(filteredCustomers.length / perPage) }).map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={currentPage === index + 1}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(filteredCustomers.length / perPage)}
        />
        <Pagination.Last
          onClick={() => paginate(Math.ceil(filteredCustomers.length / perPage))}
          disabled={currentPage === Math.ceil(filteredCustomers.length / perPage)}
        />
      </Pagination>
    </div>
  );
}

export default Dashboard;