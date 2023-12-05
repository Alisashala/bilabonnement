// src/components/Frontpage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Frontpage.css'; // Import the CSS file

function Frontpage() {
  return (
    <div className="frontpage-container">
      <h1>Welcome to the Front Page!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/agreements">View Agreements</Link>
          </li>
          <li>
            <Link to="/create-agreement">Create Agreement</Link>
          </li>
          <li>
            <Link to="/create-return">Create Return</Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </div>
  );
}

export default Frontpage;
