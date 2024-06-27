import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Payments() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios.get('/api/payments').then(response => {
      setPayments(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Payments</h2>
      <ul>
        {payments.map(payment => (
          <li key={payment.id}>{payment.date} - ${payment.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default Payments;
