// src/components/Purchases.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Purchases() {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    axios.get('/api/purchases')
      .then(response => {
        setPurchases(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div>
      <h2>Purchases</h2>
      <ul>
        {purchases.map(purchase => (
          <li key={purchase.id}>{purchase.item} - {purchase.quantity} - ${purchase.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default Purchases;
