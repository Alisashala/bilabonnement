import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function DamageCostOverview() {
  const [damageCosts, setDamageCosts] = useState([]);
  const [sortedCosts, setSortedCosts] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    axios.get('http://localhost:8080/api/damagereports')
      .then(response => {
        const costs = response.data.map(returnData => ({
          id: returnData.id,
          cost: returnData.damageCost,
        }));
        setDamageCosts(costs);
        setSortedCosts(costs);
      })
      .catch(error => console.error('Error fetching damage costs:', error));
  }, []);

  const calculateTotal = () => {
    return damageCosts.reduce((total, cost) => total + parseFloat(cost.cost), 0).toFixed(2);
  };

  const handleSort = () => {
    const sorted = [...sortedCosts];
    if (sortOrder === 'asc') {
      sorted.sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost));
      setSortOrder('desc');
    } else {
      sorted.sort((a, b) => parseFloat(b.cost) - parseFloat(a.cost));
      setSortOrder('asc');
    }
    setSortedCosts(sorted);
  };

  return (
    <div>
      <h2>Damage Cost Overview</h2>
      <button onClick={handleSort}>Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}</button>
      <ul>
        {sortedCosts.map(item => (
          <li key={item.id}>
            ID: {item.id} - Cost: {item.cost}
          </li>
        ))}
      </ul>
      <p>Total Damage Cost: ${calculateTotal()}</p>
      <Link to="/damagereports">Back to Returned List</Link>
    </div>
  );
}

export default DamageCostOverview;
