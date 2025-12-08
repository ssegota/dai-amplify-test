import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './style.css';

import { Amplify } from 'aws-amplify';
import outputs from './amplify_outputs.json?import';   // 🔥 NEW

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

