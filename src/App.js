import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerList from './components/CustomerList';
import CreateCustomer from './components/CreateCustomer';
import CreateReturn from './components/CreateReturn';
import DeleteCustomer from './components/DeleteCustomer';
import EditCustomer from './components/EditCustomer';
import CustomerDetails from './components/CustomerDetails';
import Frontpage from './components/Frontpage';
import SupportAndHelp from './components/SupportAndHelp';
import UpdatesAndNews from './components/UpdatesAndNews';

function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Frontpage />} /> 
        <Route path="/customers" element={<CustomerList />} />  
        <Route path="/create-customer" element={<CreateCustomer />} />
        <Route path="/customer/:id" element={<CustomerDetails />} />
        <Route path="/delete-customer/:id" element={<DeleteCustomer />} />
        <Route path="/edit-customer/:id" element={<EditCustomer />} />

        <Route path="/create-return" element={<CreateReturn />} />
        {/* Adjust the following route based on your requirements */}
        <Route path="/returns" element={<div>Returns Page</div>} />
        {/* Adjust the following route based on your requirements */}
        <Route path="/return/:id" element={<div>Return Details Page</div>} />

        <Route path="/support-and-help" element={<div>Support And Help</div>} />
        <Route path="/updates-and-news" element={<div>Updates And News</div>} />

      </Routes>
    </Router>
  );
}

export default App;
