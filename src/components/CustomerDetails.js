import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CustomerDetails() {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/customers/${id}`)
      .then(response => {
        setCustomer(response.data);
      })
      .catch(error => console.error('Error fetching customer:', error));
  }, [id]);

  if (!customer) return <div>Loading...</div>;

  return (
    <div>
      <h2>{customer.fullName}</h2>
      <p>Email: {customer.email}</p>
      <p>Region: {customer.region}</p>
      <p>CPR: {customer.cpr}</p>
      {/* Add other customer details as needed */}
    </div>
  );
}

export default CustomerDetails;