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
import ReturnedList from './components/ReturnedList';
import ReturnDetails from './components/ReturnDetails';
import DeleteReturn from './components/DeleteReturn';
import DamageCostOverview from './components/DamageCostOverview'; 

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

        <Route path="/delete-damagereport/:id" element={<DeleteReturn />} />
        <Route path="/create-return" element={<CreateReturn />} />
        <Route path="/damagereports" element={<ReturnedList />} />
        <Route path="/damagereports/:id" element={<ReturnDetails />} />
        <Route path="/damage-cost-overview" element={<DamageCostOverview />} /> 

        <Route path="/support-and-help" element={<SupportAndHelp />} />
        <Route path="/updates-and-news" element={<UpdatesAndNews/>} />
      </Routes>
    </Router>
  );
}

export default App;
