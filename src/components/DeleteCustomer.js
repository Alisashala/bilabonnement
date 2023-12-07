// src/components/CustomerList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function DeleteCustomer() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/customers')
      .then(response => setCustomers(response.data))
      .catch(error => console.error('Error fetching customers:', error));
  }, []);

  return (
    <div>
      <h2>Customer List</h2>
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>
            {customer.full_name} - 
            <Link to={`/customer/${customer.id}`}>Details</Link> | 
            <Link to={`/edit-customer/${customer.id}`}>Edit</Link> | 
            <Link to={`/delete-customer/${customer.id}`}>Delete</Link>
          </li>
        ))}
      </ul>
      <Link to="/create-customer">Add New Customer</Link>
    </div>
  );
}

export default DeleteCustomer;
