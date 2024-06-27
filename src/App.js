import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import AppWrapper from './store';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Inventory from './components/Inventory';
import Purchases from './components/Purchases';
import Sales from './components/Sales';
import Payments from './components/Payments';
import Receipts from './components/Receipts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/inventory" component={Inventory} />
        <Route path="/purchases" component={Purchases} />
        <Route path="/sales" component={Sales} />
        <Route path="/payments" component={Payments} />
        <Route path="/receipts" component={Receipts} />
        <Route path="/" exact component={Login} />
      </Routes >
    </Router>
  );
}

export default App;
