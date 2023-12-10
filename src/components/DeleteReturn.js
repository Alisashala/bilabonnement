import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function DeleteReturn() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/api/damagereports/${id}`)
      .then(() => {
        navigate('/damagereports');
        alert(`You've just deleted a damage report, ID: ${id}`);      })
      .catch(error => console.error('Error deleting movie:', error));
  };

  const handleCancel = () => {
    navigate('/damagereports');
  };

  return (
    <div>
      <h2>Delete damage report</h2>
      <p>Are you sure you want to delete this damage report?</p>
      <button onClick={handleDelete}>Yes, Delete</button>
      <button onClick={handleCancel}>No, Cancel</button>
    </div>
  );
}

export default DeleteReturn;