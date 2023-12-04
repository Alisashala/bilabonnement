import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RegistrationDetails() {
  const [agreements, setAgreements] = useState([]);

  useEffect(() => {
    // Fetch existing registrations/agreements
    axios.get("http://localhost:8080/api/agreements")
      .then(response => setAgreements(response.data))
      .catch(error => console.error("error fetching agreements: ", error));
  }, []);

  return (
    <div>
      <h2>Agreements List</h2>
      <ul>
        {/* Map through agreements and render each one */}
        {agreements.map(agreement => (
          <li key={agreement.id}>{agreement.name}</li>
        ))}
      </ul>

      {/* Link to navigate to the create registration page */}
      <Link to="/create">Add New Registration</Link>
    </div>
  );
}

export default RegistrationDetails;