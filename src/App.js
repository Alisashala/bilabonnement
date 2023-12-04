import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationDetails from './components/RegistrationDetails';
import CreateRegistration from './components/CreateRegistration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationDetails />} />
        <Route path="/create" element={<CreateRegistration />} />
      </Routes>
    </Router>
  );
}

export default App;