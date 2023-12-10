import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import '../styling/ReturnDetails.css'; // Import the CSS file

function ReturnDetails() {
  const { id } = useParams();
  const [returns, setReturns] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/damagereports/${id}`)
      .then(response => {
        setReturns(response.data);
      })
      .catch(error => console.error('Error fetching return:', error));
  }, [id]);

  if (!returns) return <div>Loading...</div>;

  return (
    <div className="return-details-container">
      <div className="return-details-box">
        <h2>{returns.brand} {returns.model}</h2>
        <p><strong>Description: </strong>{returns.damageDescription}</p>
        <p><strong>Damage level: </strong>{returns.damageLevel} </p>
        <p><strong>Damage type: </strong>{returns.damageType}</p>
        <p><strong>Damage cost: </strong>{returns.damageCost} </p>
        
        <div className='back-button-return-details'>
        <Link to="/damagereports" className='back-text'>Back</Link>
        </div>
      </div>
    </div>
  );
}

export default ReturnDetails;
