import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AgreementList from './components/AgreementList';
import CreateAgreement from './components/CreateAgreement';
import CreateReturn from './components/CreateReturn';
import DeleteAgreement from './components/DeleteAgreement';
import EditAgreement from './components/EditAgreement';
import ReturnedList from './components/ReturnedList';
import Frontpage from './components/Frontpage';

function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Frontpage />} /> 
        <Route path="/agreements" element={<AgreementList />} />  
        <Route path="/create-agreement" element={<CreateAgreement />} />
        <Route path="/agreement/:id" element={<AgreementList />} />
        <Route path="/delete-agreement/:id" element={<DeleteAgreement />} />
        <Route path="/edit-agreement/:id" element={<EditAgreement />} />

        <Route path="/create-return" element={<CreateReturn />} />
        <Route path="/returns" element={<ReturnedList />} />
        <Route path="/return/:id" element={<ReturnedList />} />
      </Routes>
    </Router>
  );
}

export default App;