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
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/customers')
      .then((response) => {
        setCustomers(response.data);
        // Calculate total price
        const total = response.data.reduce(
          (accumulator, customer) => accumulator + parseFloat(customer.price),
          0
        );
        setTotalPrice(total);
      })
      .catch((error) => console.error('Error fetching customers:', error));
  }, []);

  return (
    <div>
      <Header />
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

        <h4>
          <strong>Total Price:</strong> {totalPrice.toFixed(2)}
        </h4>
  
        <Link to="/create-customer" id="add-customer-link">
          Add New Registration
        </Link>
      </div>
    
    </div>
  );
}

export default CustomerList;
