import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../styling/CreateReturn.css'; 

// Den funktionelle komponent til oprettelse af ny skaderapport
function CreateReturn() {

  // Hook der mulliggøre navigation mellem sider
  const navigate = useNavigate();

  // State der administrere formdata for oprettelse af en ny skaderapport
  const [newReturn, setNewReturn] = useState({
    brand: '',
    model: '',
    damageType: '',
    damageDescription: '',
    damageLevel: '',
    damageCost: ''
  });

  // Funktion til at håndtere indsendelse af formularen
  const handleSubmit = (e) => {
    e.preventDefault();

    // Bruger Axios til at sende en POST-anmodning til serveren med den nye skaderapport
    axios.post('http://localhost:8080/api/damagereports', newReturn)
      .then(() => navigate('/damagereports')) // Hvis det lykkes, naviger til 'damagereports'-endpointet
      .catch(error => console.error('Error creating return:', error));
  };

   // Funktion til at håndtere ændringer i inputfelterne i formularen
  const handleChange = (e) => {
    // Afgør typen af input og opdater den tilsvarende egenskab i staten
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setNewReturn({ ...newReturn, [e.target.name]: value });
  };

   // Return / rendering af CreateReturn komponenten
  return (
    <div>
      <header>
      <div className="header-container">
         <Link to="/" className="logo-container2">
            <img src="logoimage.png" alt="Logo" className="logo" />
          </Link>
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
      <div className="create-return-container2">
        <div className="create-return-box2">
          <h1>Create New Damage Report</h1>
          <label>Brand</label>
          <input
            name="brand"
            value={newReturn.brand}
            onChange={handleChange}
            required
          />

          <label>Model</label>
          <input
            name="model"
            value={newReturn.model}
            onChange={handleChange}
            required
          />

          <label>Damage Type</label>
          <input
            name="damageType"
            value={newReturn.damageType}
            onChange={handleChange}
            required
          />

          <label>Damage Description</label>
          <input
            name="damageDescription"
            value={newReturn.damageDescription}
            onChange={handleChange}
            required
          />

          <label>Damage Level</label>
          <select
            name="damageLevel"
            value={newReturn.damageLevel}
            onChange={handleChange}
            required
          >
            <option value="">Select Damage Level</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <label>Damage Cost</label>
          <input
            name="damageCost"
            value={newReturn.damageCost}
            onChange={handleChange}
            required
          />

          <button className="submit-button" type="submit" onClick={handleSubmit}>
            Create Damage Report
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateReturn;
