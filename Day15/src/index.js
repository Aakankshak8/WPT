import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Fact from './fact';
import First from './first';
import Calculator from './cal';
import Fun1 from './ClassComponentLifeCycle';
import Event from './EventH';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      
      <Fact num1="5" />
      <Calculator num1="11" num2="9" op="2" />
      
      <App />
      <Event/>
      
      <First />
    </>
  </React.StrictMode>
);

reportWebVitals();
