import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styling/DeleteReturn.css';

function DeleteReturn() {
  // Henter skaderapportens ID fra URL-parametre ved hjælp af useParams-hook
  const { id } = useParams();
  // Hook der mulliggøre navigation mellem sider
  const navigate = useNavigate();


  // Funktion til at håndtere sletning af skaderapport
  const handleDelete = () => {
    // Sender en DELETE-anmodning til API-endepunktet for at slette skaderapporten med det specifikke ID
    axios.delete(`http://localhost:8080/api/damagereports/${id}`)
      .then(() => {
        // Navigerer tilbage til listen over skaderapporter og viser en bekræftelsesbesked
        navigate('/damagereports');
        alert(`You've just deleted a damage report, ID: ${id}`);
      })
      .catch(error => console.error('Error deleting damage report:', error));
  };

   // Funktion til at håndtere annullering af sletning og navigere tilbage til listen over skaderapporter
  const handleCancel = () => {
    navigate('/damagereports');
  };

  return (
    <div className="delete-return-container">
      <div className="delete-return-box">
        <h2>Delete Damage Report</h2>
        <p>Are you sure you want to delete this damage report?</p>
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

export default DeleteReturn;
