import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboards';
import CustomerDetails from './components/CustomerDetails';
import CityList from './components/CityList';
import EditCustomer from './components/EditCustomer';
import Pagination from 'react-bootstrap/Pagination';

function TaskApp() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/cities">City List</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/customer/:id" element={<CustomerDetails />} />
          <Route path="/cities" element={<CityList />} />
          <Route path="/customer/:id/edit" element={<EditCustomer />} />
        </Routes>
        <Pagination />
      </div>
    </Router>
  );
}

export default TaskApp;