import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="/inventory">Inventory</Link></li>
          <li><Link to="/purchases">Purchases</Link></li>
          <li><Link to="/sales">Sales</Link></li>
          <li><Link to="/payments">Payments</Link></li>
          <li><Link to="/receipts">Receipts</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;
