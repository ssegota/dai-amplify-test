import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './style.css';

// ✅ Add Amplify initialization
import { Amplify } from 'aws-amplify';
import outputs from './amplify_outputs.json';

// MUST run BEFORE any generateClient() call in your app
Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

