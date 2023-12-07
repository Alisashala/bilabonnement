// src/components/Frontpage.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/Frontpage.css'; // Import the CSS file



function Frontpage() {
  return (
    <div className="frontpage-container">
      <header>
        <div className="logo-container">
          <img src="logoimage.png" alt="Logo" className="logo" />
        </div>
        <nav>
          <ul style={{ marginLeft: 'auto' }}>
            <li>
              <Link to="/support-and-help" className="nav-link">Support and Help</Link>
            </li>
            <li>
              <Link to="/updates-and-news" className="nav-link">Updates and News</Link>
            </li>
            
          </ul>
        </nav>
      </header>

      {/* Welcome text */}
      <div className="welcome-text">
        <h1>Welcome, User3827</h1>
      </div>

      {/* View Agreements box */}
      <Link to="/customers" className="box-link">
        <div className="box agreements-box">
          <h2>View Agreements</h2>
        </div>
      </Link>

      {/* Create Agreement box */}
      <Link to="/create-customer" className="box-link">
        <div className="box create-agreement-box">
          <h2>Create Agreement</h2>
        </div>
      </Link>

      {/* Create Return box */}
      <Link to="/create-return" className="box-link">
        <div className="box create-return-box">
          <h2>Create Return</h2>
        </div>
      </Link>
    </div>
  );
}

export default Frontpage;
