// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWrapper from './store';

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
  document.getElementById('root')
);
