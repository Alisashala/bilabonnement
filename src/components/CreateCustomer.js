import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreateAgreement.css';


function CreateCustomer() {
  const navigate = useNavigate();
  const [newCustomer, setNewCustomer] = useState({
    fullName: '',
    email: '',
    region: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/customers', newCustomer)
      .then(() => navigate('/customers'))
      .catch(error => console.error('Error creating customer:', error));
  };

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setNewCustomer({ ...newCustomer, [e.target.name]: value });
  };

  return (
    <div className="create-customer-container">
      <div className="create-customer-box">
        <h2>Create New Customer</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Full Name:</label>
            <input
              name="fullName"
              value={newCustomer.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={newCustomer.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>CPR:</label>
            <input
              type="cpr"
              name="cpr"
              value={newCustomer.cpr}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Region:</label>
            <input
              name="region"
              value={newCustomer.region}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Create Customer</button>
        </form>
      </div>
    </div>
  );
}

export default CreateCustomer;
