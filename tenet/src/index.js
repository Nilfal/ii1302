import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Homepage from './components/views/homepage'
ReactDOM.render(
  <React.StrictMode>
    <Homepage/>
  
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
