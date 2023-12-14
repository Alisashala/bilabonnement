import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styling/DeleteCustomer.css';

function DeleteCustomer() {
  // Henter kunde-ID fra URL-parametre ved hjælp af useParams-hook
  const { id } = useParams();

  // Hook der mulliggøre navigation mellem sider
  const navigate = useNavigate();

  // Funktion til at håndtere sletning af kunde
  const handleDelete = () => {
    // Sender en DELETE-anmodning til API-endepunktet for at slette kunden med det specifikke ID
    axios
      .delete(`http://localhost:8080/api/customers/${id}`)
      .then(() => {
        // Navigerer tilbage til kundelisten og viser en bekræftelsesbesked
        navigate('/customers');
        alert(`You've just deleted registration, ID: ${id}`);
      })
      .catch((error) => console.error('Error deleting customer:', error));
  };

  // Funktion til at håndtere annullering af sletning og navigere tilbage til kundelisten
  const handleCancel = () => {
    navigate('/customers');
  };

  return (
    <div className="delete-customer-container">
      <div className="delete-customer-box">
        <h2>Delete Registration</h2>
        <p>Are you sure you want to delete this registration?</p>
         {/* Knapper til at bekræfte eller annullere sletning */}
        <div className="button-container">
          <button className="delete-button" onClick={handleDelete}>
            Yes, Delete
          </button>
          <button className="cancel-button" onClick={handleCancel}>
            No, Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteCustomer;
