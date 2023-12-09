import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function ReturnDetails() {
  const { id } = useParams();
  const [returns, setReturns] = useState(null);
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/damagereports/${id}`)
      .then(response => {
        setReturns(response.data);
        setShowDeleteButton(true);
      })
      .catch(error => console.error('Error fetching return:', error));

    return () => {
      setShowDeleteButton(false);
    };
  }, [id]);

  if (!returns) return <div>Loading...</div>;

  return (
    <div>
      <h2>{returns.brand} {returns.model}</h2>
      <p>Description: {returns.damageDescription}</p>
      <p>Damage level: {returns.damageLevel}</p>
      <p>Damage type: {returns.damageType}</p>
      <p>Damage cost: {returns.damageCost}</p>
      {showDeleteButton && (
        <Link to={`/delete-damagereport/${id}`}>Delete</Link>
      )}
    </div>
  );
}

export default ReturnDetails;
