// ReturnedList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styling/ReturnedList.css';

function Header() {
  return (
    <header>
      <div className="header-container">
          <Link to="/" className="logo-container2">
            <img src="logoimage.png" alt="Logo" className="logo" />
         </Link>
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
    </header>
  );
}

function ReturnedList() {
  const [returns, setReturns] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/damagereports')
      .then(response => setReturns(response.data))
      .catch(error => console.error('Error fetching returns:', error));
  }, []);

  return (
    <div>
      <Header />
      <div id="customer-list-container">
        <h2 id="customer-list-title">Damage Report List</h2>
        <ul id="customer-list">
          {returns.map(newReturn => (
            <li key={newReturn.id} className="customer-list-item">
              <span className="customer-id">ID: {newReturn.id}</span>
              <br />
              <span className="customer-name">{newReturn.brand}</span>
              <div className='customer-links-container'>
              <Link to={`/damagereports/${newReturn.id}`} className="customer-details-link">
                Details
              </Link>{' '}
              
              <Link to={`/delete-damagereport/${newReturn.id}`} className="customer-delete-action">
                Delete
              </Link>
              </div>
            </li>
          ))}
        </ul>
         <div >
            <Link to="/damage-cost-overview" id="damage-cost-link">
              Damage Cost Overview
            </Link>
            <Link to="/create-return" id="add-return-link" >
              Add New Damage Report
            </Link>
          </div>
      </div>
    </div>
  );
}

export default ReturnedList;
