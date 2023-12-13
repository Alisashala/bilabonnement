
import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styling/DeleteReturn.css';

function DeleteReturn() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/api/damagereports/${id}`)
      .then(() => {
        navigate('/damagereports');
        alert(`You've just deleted a damage report, ID: ${id}`);
      })
      .catch(error => console.error('Error deleting damage report:', error));
  };

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
