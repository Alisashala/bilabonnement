import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styling/CreateReturn.css';


function CreateReturn() {
  const navigate = useNavigate();
  const [newReturn, setNewReturn] = useState({
    brand: '',
    model: '',
    damageType: '',
    damageDescription: '',
    damageLevel: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/damagereports', newReturn)
      .then(() => navigate('/returns'))
      .catch(error => console.error('Error creating return:', error));
  };

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setNewReturn({ ...newReturn, [e.target.name]: value });
  };

  return (
    <div className="create-return-container2">
      <div className="create-return-box2">
        <h2>Create New Return</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Brand:</label>
            <input
              name="brand"
              value={newReturn.brand}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Model:</label>
            <input
              name="model"
              value={newReturn.model}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Damage Type:</label>
            <input
              name="damageType"
              value={newReturn.damageType}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Damage Description:</label>
            <input
              name="damageDescription"
              value={newReturn.damageDescription}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Damage Level:</label>
            <input
              name="damageLevel"
              value={newReturn.damageLevel}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Create Return</button>
        </form>
      </div>
    </div>
  );
}

export default CreateReturn;
