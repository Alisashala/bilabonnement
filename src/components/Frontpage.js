import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/Frontpage.css';

// Frontsiden for webapplikationen, der indeholder navigationsmenu, velkomsttekst og links til forskellige sektioner
function Frontpage() {
  return (
    <div className="frontpage-container">
      <header>
        <Link to="/" className="logo-container1">
          <img src="logoimage.png" alt="Logo" className="logo" />
        </Link>
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

      <div className="welcome-text">
        <h1>Welcome, User3827</h1>
      </div>

      <div className="big-box">
        <div className="big-box-part">
          <Link to="/create-customer" className="box-link create-agreement-box">
            <div className="box create-agreement-box">
              <h2>Create Agreement</h2>
            </div>
          </Link>
        </div>

        <div className="big-box-part">
          <Link to="/customers" className="box-link view-agreements-box">
            <div className="box agreements-box">
              <h2>View Agreements</h2>
            </div>
          </Link>
        </div>

        <div className="big-box-part">
          <Link to="/create-return" className="box-link create-return-box">
            <div className="box create-return-box">
              <h2>Create Damage Report</h2>
            </div>
          </Link>
        </div>

        <div className="big-box-part">
          <Link to="/damagereports" className="box-link view-returns-box">
            <div className="box view-returns-box">
              <h2>View Damage Reports</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Frontpage;
