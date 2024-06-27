// src/components/Sales.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Sales() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    axios.get('/api/sales')
      .then(response => {
        setSales(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div>
      <h2>Sales</h2>
      <ul>
        {sales.map(sale => (
          <li key={sale.id}>{sale.item} - {sale.quantity} - ${sale.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sales;
