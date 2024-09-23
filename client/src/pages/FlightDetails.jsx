import React, { useContext, useState } from 'react';
import { FlightContext } from './FlightContext';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import "../App.css"; // Ensure your CSS file is correctly linked

function FlightDetails() {
  const { selectedFlight } = useContext(FlightContext);
  const [rating, setRating] = useState(0); // State to manage rating

  if (!selectedFlight) {
    return <div>No flight selected!</div>;
  }

  return (
    <div className="flight-details-page" style={{ backgroundColor: "#f4f4f5" }}>
      {/* Header */}
      <header style={{ backgroundColor: "#ffffff" }} className="header text-white text-center p-3">
        <div className="filter-buttons d-flex align-items-center justify-content-between">
          {/* Filter Buttons */}
          <div>
            <button className="btn btn-marg btn-light">Times</button>
            <button className="btn btn-marg btn-light">Stops</button>
            <button className="btn btn-marg btn-light">Airlines</button>
            <button className="btn btn-marg btn-light">Airports</button>
            <button className="btn btn-marg btn-light">Amenities</button>
            <button
              style={{
                border: "none",
                outline: "none",
                color: "#70aefc",
                backgroundColor: "transparent"
              }}
              className="btn btn-marg btn-light"
            >
              Edit Search ⬇️
            </button>
          </div>
          
          {/* Rating Component */}
          <Rater 
            total={5}             // Total stars
            rating={rating}       // Current rating
            interactive={true}    // Make it interactive (user can rate)
            onRate={(rating) => setRating(rating.rating)} // Update rating on rate change
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content container mt-4">
        <div style={{ marginTop: "50px", width: "1500px" }} className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="card shadow p-4" style={{ backgroundColor: "#ffffff" }}>
              <h2 className="mb-4">Flight Information</h2>
              
              {/* Flight Info in a row */}
              <div className="row text-center">
                <div className="col-md-4">
                  <p><strong>Flight Name:</strong> {selectedFlight.flightName}</p>
                </div>
                <div className="col-md-4">
                  <p><strong>Departure:</strong> {selectedFlight.publicFlightState.flightStates[0]}</p>
                </div>
                <div className="col-md-4">
                  <p><strong>Arrival:</strong> {selectedFlight.publicFlightState.flightStates[1]}</p>
                </div>
              </div>

              {/* Price Options Cards */}
              <div className="row price-options mt-4 d-flex align-items-stretch">
                {/* Price Card 1 */}
                <div className="col-md-2 d-flex">
                  <div className="card p-3 flex-fill" style={{ backgroundColor: "white" }}>
                    <p><strong>$156</strong></p>
                    <p>Main</p>
                  </div>
                </div>
                {/* Price Card 2 */}
                <div className="col-md-2 d-flex">
                  <div className="card p-3 flex-fill" style={{ backgroundColor: "white" }}>
                    <p><strong>$204</strong></p>
                    <p>Comfort+</p>
                  </div>
                </div>
                {/* Price Card 3 (Empty) */}
                <div className="col-md-2 d-flex">
                  <div className="card p-3 flex-fill" style={{ backgroundColor: "#f4f4f5" }}>
                    <p><strong>—</strong></p>
                  </div>
                </div>
                {/* Price Card 4 */}
                <div className="col-md-2 d-flex">
                  <div className="card p-3 flex-fill" style={{ backgroundColor: "white" }}>
                    <p><strong>$386</strong></p>
                    <p>Delta One</p>
                  </div>
                </div>
                {/* Price Card 5 (Empty) */}
                <div className="col-md-2 d-flex">
                  <div className="card p-3 flex-fill" style={{ backgroundColor: "#f4f4f5" }}>
                    <p><strong>—</strong></p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FlightDetails;
