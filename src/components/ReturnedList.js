import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ReturnedList() {
  const [returns, setReturns] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/damagereports')
      .then(response => setReturns(response.data))
      .catch(error => console.error('Error fetching returns:', error));
  }, []);

  return (
    <div>
      <h2>Returned List</h2>
      <ul>
        {returns.map(newReturn => (
          <li key={newReturn.id}>
            {newReturn.brand} - 
            <Link to={`/damagereports/${newReturn.id}`}>Details</Link>
          </li>
        ))}
      </ul>
      <Link to="/create-return">Add New Return</Link>
      <Link to="/damage-cost-overview">Damage Cost Overview</Link>
    </div>
  );
}

export default ReturnedList;