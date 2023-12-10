// CustomerList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styling/CustomerList.css';

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo-container2">
          <img src="logoimage.png" alt="Logo" className="logo" />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/customers')
      .then((response) => setCustomers(response.data))
      .catch((error) => console.error('Error fetching customers:', error));
  }, []);

  return (
    <div>
      <Header /> {/* Include the Header component */}
      <div id="customer-list-container">
        <h2 id="customer-list-title">Registrations</h2>
        <ul id="customer-list">
          {customers.map((customer) => (
            <li key={customer.id} className="customer-list-item">
              <span className="customer-id">ID: {customer.id}</span>
              <br />
              <span className="customer-name">{customer.fullName}</span> 
              <Link
                to={`/customer/${customer.id}`}
                className="customer-details-link"
              >
                Details
              </Link>{' '}
              |
              <Link
                to={`/edit-customer/${customer.id}`}
                className="customer-edit-action"
              >
                Edit
              </Link>{' '}
              |
              <Link
                to={`/delete-customer/${customer.id}`}
                className="customer-delete-action"
              >
                Delete
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/create-customer" id="add-customer-link">
          Add New Registration
        </Link>
      </div>
    </div>
  );
}

export default CustomerList;
