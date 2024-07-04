import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import LandingPage from './components/LandingPage';
import SobrePage from './components/SobrePage';
import AdminPage from './components/AdminPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <MenuBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;