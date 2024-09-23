// App.js
import React from 'react';
import { FlightProvider } from './pages/FlightContext';
import Homepage from './pages/homepage';
import FlightDetails from './pages/FlightDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <FlightProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/flight-details" element={<FlightDetails />} />
        </Routes>
      </Router>
    </FlightProvider>
  );
}

export default App;
