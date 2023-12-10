import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styling/ReturnedList.css';


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
      <div id="returned-list-container">
        <h2 id="returned-list-title">Returned List</h2>
        <ul id="returned-list">
          {returns.map(newReturn => (
            <li key={newReturn.id} className="returned-list-item">
              <span className="return-brand">{newReturn.brand}</span> 
              <Link to={`/damagereports/${newReturn.id}`} className="return-details-link">
                Details
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/create-return" id="add-return-link">
          Add New Return
        </Link>
        <Link to="/damage-cost-overview" id="damage-cost-link">
          Damage Cost Overview
        </Link>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header>
      <div className="header-container-returned-list">
        <div className="logo-container-returned-list">
          <img src="logoimage.png" alt="Logo" className="logo" />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/" className="nav-link-returned-link">
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default ReturnedList;
