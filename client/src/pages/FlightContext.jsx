import React, { createContext, useState } from 'react';

export const FlightContext = createContext();

export const FlightProvider = ({ children }) => {
  const [selectedFlight, setSelectedFlight] = useState(null);

  return (
    <FlightContext.Provider value={{ selectedFlight, setSelectedFlight }}>
      {children}
    </FlightContext.Provider>
  );
};
