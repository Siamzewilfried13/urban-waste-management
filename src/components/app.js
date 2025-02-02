import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/tailwind.css';
import './styles/custom.css';
import AuthenticationPage from './AuthenticationPage';
import WasteManagementSystem from './WasteManagementSystem';
import Analytics from './components/Analytics'; // Ensure this path is correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthenticationPage />} />
        <Route path="/app" element={<WasteManagementSystem />} />
        <Route path="/analytics" element={<Analytics />} /> {/* Ensure this route is correct */}
      </Routes>
    </Router>
  );
}

export default App;