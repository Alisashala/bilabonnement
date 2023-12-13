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
  const [totalRegistrations, setTotalRegistrations] = useState(0);

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
        // Set total registrations
        setTotalRegistrations(response.data.length);
      })
      .catch((error) => console.error('Error fetching customers:', error));
  }, []);

  return (
    <div>
      <Header />

      <div id="customer-list-container">
        <h1 id="customer-list-title">Registrations</h1>

        <Link to="/create-customer" id="add-customer-link">
          Add New Registration
        </Link>

        <h4>
          <strong>Total Price:</strong> <div id='total-price'> {totalPrice.toFixed(2)} DKK </div>  
          </h4>
          <h4>
          <strong id='total-registrations-title'>Total Registrations:</strong>  <div id='total-registrations'>{totalRegistrations}</div>
        </h4>

        <ul id="customer-list">
          {customers.map((customer) => (
            <li key={customer.id} className="customer-list-item">
              <span className="customer-id">ID: {customer.id}</span>
              <br />
              <span className="customer-name">{customer.fullName}</span>
              <div className="customer-links-container">
                <Link
                  to={`/customer/${customer.id}`}
                  className="customer-details-link"
                >
                  Details
                </Link>{' '}
                
                <Link
                  to={`/edit-customer/${customer.id}`}
                  className="customer-edit-action"
                >
                  Edit
                </Link>{' '}
                
                <Link
                  to={`/delete-customer/${customer.id}`}
                  className="customer-delete-action"
                >
                  Delete
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CustomerList;
