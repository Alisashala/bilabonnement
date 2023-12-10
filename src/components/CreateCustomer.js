
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; // Remove 'useNavigate' from this line
import '../styling/CreateAgreement.css'; // Import the existing CSS file

// ... (Your existing imports)

function CreateCustomer() {
  const navigate = useNavigate();
  const [newCustomer, setNewCustomer] = useState({
    fullName: '',
    email: '',
    cpr: '',
    region: '',
    price: '',
    brand: '',
    model: '',
    braendstof: '',
    kml: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/api/customers', newCustomer)
      .then(() => navigate('/customers'))
      .catch((error) =>
        console.error('Error creating customer:', error)
      );
  };

  const handleChange = (e) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setNewCustomer({ ...newCustomer, [e.target.name]: value });
  };

  return (
    <div>
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

      {/* Main Content */}
      <div className="create-customer-container">
        <div className="create-customer-box">
          <h2>Create New Agreement</h2>
          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-section">
              <h2>Customer Details</h2>
              <div>
                <label>Full Name </label>
                <input
                  name="fullName"
                  value={newCustomer.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Email </label>
                <input
                  type="email"
                  name="email"
                  value={newCustomer.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>CPR </label>
                <input
                  type="text"
                  name="cpr"
                  value={newCustomer.cpr}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Region </label>
                <select
                  name="region"
                  value={newCustomer.region}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Region</option>
                  <option value="Region Nordjylland">
                    Region Nordjylland
                  </option>
                  <option value="Region Syddanmark">Region Syddanmark</option>
                  <option value="Region Sjælland">Region Sjælland</option>
                  <option value="Region Hovedstaden">
                    Region Hovedstaden
                  </option>
                  <option value="Region Midtjylland">
                    Region Midtjylland
                  </option>
                </select>
              </div>
            </div>
            <div className="form-section">
              <h2>Car Details</h2>
              <div>
                <label>Price </label>
                <input
                  name="price"
                  value={newCustomer.price}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="car-details-row">
              <div>
                <label>Brand </label>
                <input
                  name="brand"
                  value={newCustomer.brand}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Model </label>
                <input
                  name="model"
                  value={newCustomer.model}
                  onChange={handleChange}
                  required
                />
              </div>
              </div>
              <div>
                <label>Fuel </label>
                <input
                  name="braendstof"
                  value={newCustomer.braendstof}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Km/l </label>
                <input
                  name="kml"
                  value={newCustomer.kml}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <button className="submit-button" type="submit">Create Agreement</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateCustomer;
