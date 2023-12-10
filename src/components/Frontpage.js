import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/Frontpage.css'; // Import the CSS file

function Frontpage() {
  return (
    <div className="frontpage-container">
      <header>
        <div className="logo-container1">
          <img src="logoimage.png" alt="Logo" className="logo" />
        </div>
        <nav>
          <ul style={{ marginLeft: 'auto' }}>
            <li>
              <Link to="/support-and-help" className="nav-link">
                Support and Help
              </Link>
            </li>
            <li>
              <Link to="/updates-and-news" className="nav-link">
                Updates and News
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      
     {/* Welcome text */}
     <div className="welcome-text">
        <h1>Welcome, User3827</h1>
      </div>

      {/* One big box divided into four parts */}
      <div className="big-box">
        {/* Group 1: Create Agreement and View Agreements */}
        <div className="big-box-part">
          {/* Create Agreement box */}
          <Link to="/create-customer" className="box-link create-agreement-box">
            <div className="box create-agreement-box">
              <h2>Create Agreement</h2>
            </div>
          </Link>
        </div>

        <div className="big-box-part">
          {/* View Agreements box */}
          <Link to="/customers" className="box-link view-agreements-box">
            <div className="box agreements-box">
              <h2>View Agreements</h2>
            </div>
          </Link>
        </div>

        {/* Group 2: Create Return and View Returns */}
        <div className="big-box-part">
          {/* Create Return box */}
          <Link to="/create-return" className="box-link create-return-box">
            <div className="box create-return-box">
              <h2>Create Return</h2>
            </div>
          </Link>
        </div>

        <div className="big-box-part">
          {/* View Returns box */}
          <Link to={`/damagereports`} className="box-link view-returns-box">
            <div className="box view-returns-box">
              <h2>View Returns</h2>
            </div>
          </Link> 
        </div>
      </div>
    </div>
  );
}

export default Frontpage;