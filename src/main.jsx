/*
  File: index.js
  Programmer: Luis Sanchez
  Contact: luisanchezdh@gmail.com
  Date: 10/10/2024
  Version: 1.0
  Purpose: This file is the entry point for the Trivia App. It initializes the React application and renders the main App component into the DOM. The app is wrapped in StrictMode to help identify potential problems in the application during development.
*/

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Create a root for the React application and render the App component
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
