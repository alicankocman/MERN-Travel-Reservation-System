// FlightDetails.js
import React, { useContext } from 'react';
import { FlightContext } from './FlightContext';

function FlightDetails() {
  const { selectedFlight } = useContext(FlightContext);

  if (!selectedFlight) {
    return <div>No flight selected!</div>;
  }

  return (
    <div>
      <h1>Flight Details</h1>
      <p>Flight Name: {selectedFlight.flightName}</p>
      <p>Departure: {selectedFlight.publicFlightState.flightStates[0]}</p>
      <p>Arrival: {selectedFlight.publicFlightState.flightStates[1]}</p>
      {/* Diğer uçuş bilgilerini de buraya ekleyebilirsiniz */}
    </div>
  );
}

export default FlightDetails;
