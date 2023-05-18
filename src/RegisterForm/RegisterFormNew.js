import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RegisterFormNew = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Fetch all users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/users');
      setUsers(response.data);
    } catch (error) {
      console.log('An error occurred:', error.message);
    }
  };
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  const handleSubmit = async () => {
    try {
      const newUser = { name, email, password };
      await axios.post('http://localhost:5000/register', newUser);
      console.log('User registered successfully');
      // Add any desired success handling here
      fetchUsers(); // Refresh the user list after successful registration
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log('An error occurred:', error.message);
      // Add any desired error handling here
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/users/${userId}`);
      console.log('User deleted successfully');
      // Add any desired success handling here
      fetchUsers(); // Refresh the user list after successful deletion
    } catch (error) {
      console.log('An error occurred:', error.message);
      // Add any desired error handling here
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button onClick={handleSubmit}>Register</button>

      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.email}
            <button onClick={() => handleDelete(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegisterFormNew;
