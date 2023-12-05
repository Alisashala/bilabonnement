import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Import global styles
import './components/Frontpage.css'; // Import Frontpage styles
import './components/CreateAgreement.css'; // Import CreateAgreement styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);