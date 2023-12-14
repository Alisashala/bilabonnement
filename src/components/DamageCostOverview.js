import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styling/DamageCostOverview.css';

function DamageCostOverview() {
  // State-hooks til skadedata, sorteret skadedata og sorteringsrækkefølge
  const [damageCosts, setDamageCosts] = useState([]);
  const [sortedCosts, setSortedCosts] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  // Effekt-hook til at hente skadedata ved komponentens indlæsning
  useEffect(() => {
    axios.get('http://localhost:8080/api/damagereports')
      .then(response => {
        // Mapper skadedata til ønsket format
        const costs = response.data.map(returnData => ({
          id: returnData.id,
          cost: returnData.damageCost,
        }));
        // Opdaterer tilstanden med både rå og sorteret skadedata
        setDamageCosts(costs);
        setSortedCosts(costs);
      })
      .catch(error => console.error('Error fetching damage costs:', error));
  }, []);

  // Funktion til at beregne den samlede skadepris
  const calculateTotal = () => {
    // Beregner den samlede skadepris ved at summe omkostningerne for hver skade og afrunde resultatet til to decimaler.
    return damageCosts.reduce((total, cost) => total + parseFloat(cost.cost), 0).toFixed(2);
  };

  // Funktion til at håndtere sortering af omkostninger ved klik på knappen i ascending og descending 
  const handleSort = () => {
    const sorted = [...sortedCosts];
    if (sortOrder === 'asc') {
      // Sorterer omkostningerne fra lav til høj
      sorted.sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost));

      setSortOrder('desc');
    } else {
      // Sorterer omkostningerne fra høj til lav
      sorted.sort((a, b) => parseFloat(b.cost) - parseFloat(a.cost));
      setSortOrder('asc');
    }
    // Opdaterer tilstanden med den nye sorteringsrækkefølge
    setSortedCosts(sorted);
  };

  return (
    <div className="damage-cost-container">
      <div className="damage-cost-box">
        <h2>Damage Cost Overview</h2>
        {/* Knappen til at ændre sorteringen af omkostningerne */}
        <button className="sort-button" onClick={handleSort}>
          Sort {sortOrder === 'asc' ? 'Low to High' : 'High to Low'}
        </button>
        {/* Liste over sorteret skadedata */}
        <ul className="cost-list">
          {sortedCosts.map(item => (
            <li key={item.id}>
               {/* Visning af ID og omkostninger for hver skade */}
              <strong>ID:</strong> {item.id} - <strong>Cost:</strong> ${item.cost}
            </li>
          ))}
        </ul>
        {/* Visning af den samlede skadepris */}
        <p className="total-cost">
          <span className="highlight-text">Total Damage Cost:</span> ${calculateTotal() }
        </p>
        <Link to="/damagereports" className="back-button">Back to Returned List</Link>
      </div>
    </div>
  );
}

export default DamageCostOverview;
