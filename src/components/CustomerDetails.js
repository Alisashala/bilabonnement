import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import '../styling/CustomerDetails.css'; 

// CustomerDetails-komponenten, der viser detaljer om en specifik kunde
function CustomerDetails() {
  // Henter kunde-ID fra URL-parametre
  const { id } = useParams();
    // Tilstand til at gemme kundedata
  const [customer, setCustomer] = useState(null);


  // Effekt-hook til at hente kundedetaljer fra API ved komponentindlæsning
  useEffect(() => {
    axios.get(`http://localhost:8080/api/customers/${id}`)
      .then(response => {
        setCustomer(response.data);
      })
      .catch(error => console.error('Error fetching customer:', error));
  }, [id]);

  // Hvis kundedata ikke er tilgængeligt, vises en "Loading..."-meddelelse
  if (!customer) return <div>Loading...</div>;

  return (
    <div className="customer-details-container">
      <div className="customer-details-box">
        <h2>{customer.fullName}</h2>
        <p><strong>Email:</strong> {customer.email}</p>
        <p><strong>Region:</strong> {customer.region}</p>
        <p><strong>CPR:</strong> {customer.cpr}</p>
        <p><strong>Price:</strong> {customer.price}</p>
        <p><strong>Car:</strong> {customer.brand} {customer.model}</p>
        <p><strong>Brændstof:</strong> {customer.braendstof}</p>
        <p><strong>Km/l:</strong> {customer.kml}</p>
        {/* Add other customer details as needed */}
        
        {/* Back Button */}
        <Link to="/customers">
          <button className="back-button">Back</button>
        </Link>
      </div>
    </div>
  );
}

export default CustomerDetails;
