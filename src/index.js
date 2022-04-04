import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const router = <React.StrictMode><BrowserRouter><App /></BrowserRouter></React.StrictMode>

ReactDOM.render(
  router,
  document.getElementById('root')
);

reportWebVitals();
