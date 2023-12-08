import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styling/CustomerList.css';

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/customers')
      .then(response => setCustomers(response.data))
      .catch(error => console.error('Error fetching customers:', error));
  }, []);

  return (
    <div id="customer-list-container">
      <h2 id="customer-list-title">Registration</h2>
      <ul id="customer-list">
        {customers.map(customer => (
          <li key={customer.id} className="customer-list-item">
            {customer.fullName} - 
            <Link to={`/customer/${customer.id}`} className="customer-details-link">Details</Link> | 
            <Link to={`/edit-customer/${customer.id}`} className="customer-list-action">Edit</Link> | 
            <Link to={`/delete-customer/${customer.id}`} className="customer-list-action">Delete</Link>
          </li>
        ))}
      </ul>
      <Link to="/create-customer" id="add-customer-link">Add New Registration</Link>
    </div>
  );
}

export default CustomerList;
