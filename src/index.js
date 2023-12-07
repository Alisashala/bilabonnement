import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Import global styles
import './styling/Frontpage.css'; // Import Frontpage styles
import './styling/CreateAgreement.css'; // Import CreateAgreement styles
import './styling/SupportAndHelp.css';
import './styling/UpdatesAndNews.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);