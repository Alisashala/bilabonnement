import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styling/CustomerList.css';


// Header-komponenten, der indeholder navigationslink og logo
function Header() {
  return (
    <header>
       <div className="header-container">
         <Link to="/" className="logo-container2">
           <img src="logoimage.png" alt="Logo" className="logo" />
          </Link>
        <nav>
          <ul>
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

// CustomerList-komponenten, der viser en liste over kunder og beregner samlet pris og antal registreringer
function CustomerList() {

  // State-hooks til at holde data om kunder, samlet pris og total antal registreringer
  const [customers, setCustomers] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalRegistrations, setTotalRegistrations] = useState(0);


  // useEffect-hooket til at udføre asynkrone operationer ved indlæsning af komponenten  (til at hente data om kunder, beregne total pris og antal registreringer)
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/customers')
      .then((response) => {
        // Opdaterer state med kundedata
        setCustomers(response.data);
         
         // Beregner totalprisen ved at summere prisen for hver kunde
         // `.reduce()`-metoden bruges til at kombinere alle priser i kundedata-arrayet til en enkelt værdi
        const total = response.data.reduce(

          // Akkumulerer den aktuelle kundes pris til den tidligere beregnede sum
          (accumulator, customer) => accumulator + parseFloat(customer.price),
           // Startværdien for akkumulatoren er 0
          0
        );
        // Opdaterer tilstanden `totalPrice` med den beregnede samlede pris
        setTotalPrice(total);
      

       // Opdaterer total antal registreringer
        setTotalRegistrations(response.data.length);
      })
      // Håndterer fejl ved hentning af kundedata
      .catch((error) => console.error('Error fetching customers:', error));
  }, []); // Tomt array som dependencies betyder, at dette effect kun køres én gang under komponentens indlæsning

  return (
    <div>
      {/* Indsæt Header-komponenten for navigation og logo */}
      <Header />

       {/* Container til kundelisten */}
      <div id="customer-list-container">
        <h1 id="customer-list-title">Registrations</h1>

        {/* Link til at tilføje ny kunderegistrering */}
        <Link to="/create-customer" id="add-customer-link">
          Add New Registration
        </Link>

        {/* Visning af total pris og antal registreringer */}
        <h4>
          {/*`toFixed(2)` bruges til at sikre præsentationen af prisen som et beløb med to decimaler. */}
          <strong>Total Subscription Price:</strong> <div id='total-price'> {totalPrice.toFixed(2)} DKK </div>  
          </h4>
          <h4>
          <strong id='total-registrations-title'>Total Registrations:</strong>  <div id='total-registrations'>{totalRegistrations}</div>
        </h4>

        {/* Liste over kunder med links til detaljer, redigering og sletning */}
        <ul id="customer-list">
          {customers.map((customer) => (
            <li key={customer.id} className="customer-list-item">
              <span className="customer-id">ID: {customer.id}</span>
              <br />
              <span className="customer-name">{customer.fullName}</span>
              <div className="customer-links-container">

                {/* Links til detaljer, redigering og sletning af kunden */}
                <Link
                  to={`/customer/${customer.id}`}
                  className="customer-details-link"
                >
                  Details
                </Link>{' '}
                
                <Link
                  to={`/edit-customer/${customer.id}`}
                  className="customer-edit-action"
                >
                  Edit
                </Link>{' '}
                
                <Link
                  to={`/delete-customer/${customer.id}`}
                  className="customer-delete-action"
                >
                  Delete
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CustomerList;
