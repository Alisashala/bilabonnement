import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function DeleteCustomer() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/api/customers/${id}`)
      .then(() => {
        navigate('/customers');
        alert(`You've just deleted registration, ID: ${id}`);      })
      .catch(error => console.error('Error deleting movie:', error));
  };

  const handleCancel = () => {
    navigate('/customers');
  };

  return (
    <div>
      <h2>Delete Registration</h2>
      <p>Are you sure you want to delete this registration?</p>
      <button onClick={handleDelete}>Yes, Delete</button>
      <button onClick={handleCancel}>No, Cancel</button>
    </div>
  );
}

export default DeleteCustomer;