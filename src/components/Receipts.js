// src/components/Receipts.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Receipts() {
  const [receipts, setReceipts] = useState([]);

  useEffect(() => {
    axios.get('/api/receipts')
      .then(response => {
        setReceipts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div>
      <h2>Receipts</h2>
      <ul>
        {receipts.map(receipt => (
          <li key={receipt.id}>{receipt.date} - ${receipt.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default Receipts;
