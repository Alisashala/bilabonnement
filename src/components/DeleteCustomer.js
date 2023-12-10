// DeleteCustomer.js
import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styling/DeleteCustomer.css';

function DeleteCustomer() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8080/api/customers/${id}`)
      .then(() => {
        navigate('/customers');
        alert(`You've just deleted registration, ID: ${id}`);
      })
      .catch((error) => console.error('Error deleting customer:', error));
  };

  const handleCancel = () => {
    navigate('/customers');
  };

  return (
    <div className="delete-customer-container">
      <div className="delete-customer-box">
        <h2>Delete Registration</h2>
        <p>Are you sure you want to delete this registration?</p>
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
