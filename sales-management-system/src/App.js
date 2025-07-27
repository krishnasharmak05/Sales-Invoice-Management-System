import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Invoice from './Invoice';
import PaymentsPage from './PaymentsPage';
import Charts from './Charts';
import Support from './Support';
import Signup from './Signup';
// display new invoice, add filter with search


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          localStorage.getItem("auth") != null ?
            <Home />
            :
            <Login />
        } />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/pay" element={<PaymentsPage />} />
        <Route path="/support" element={<Support />} />
        <Route path="/charts" element={<Charts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App