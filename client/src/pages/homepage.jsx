import React, { useEffect, useState } from 'react';
import FlightLogo from "../assets/flightlogo.png";
import DealsLogo from "../assets/deals.svg";
import DiscoverLogo from "../assets/discover.svg";
import AvatarLogo from "../assets/Avatar.png";
import "../App.css";

function Homepage() {
  const [flights, setFlights] = useState([]);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [isOneWay, setIsOneWay] = useState(false); // Yeni durum
  const [departureDate, setDepartureDate] = useState(''); // Kalkış tarihi
  const [returnDate, setReturnDate] = useState(''); // Dönüş tarihi

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await fetch('http://localhost:8080/https://api.schiphol.nl/public-flights/flights?includedelays=false&page=0&sort=%2BscheduleTime', {
          method: 'GET',
          headers: {
            'app_id': '6cb9d2a1',
            'app_key': 'd8351852fb63513ae0f373a84ad7244f',
            'ResourceVersion': 'v4',
            'Accept': 'application/json'
          }
        });
        const data = await response.json();
        console.log(data);
        setFlights(data.flights);
        setFilteredFlights(data.flights); // Başlangıçta tüm uçuşları göster
      } catch (error) {
        console.error('API Hatası:', error);
      }
    };

    fetchFlights();
  }, []);

  const handleSearch = () => {
    const results = flights.filter(flight => {
      const flightStates = flight.publicFlightState?.flightStates || [];
      const departureStatus = flightStates[0] || 'Bilinmiyor';
      const arrivalStatus = flightStates[1] || 'Bilinmiyor';
      const flightDate = flight.scheduleDateTime.split('T')[0]; // Uçuş tarihini al

      const fromMatch = from ? departureStatus.includes(from) : true;
      const toMatch = to ? arrivalStatus.includes(to) : true;
      const dateMatch = departureDate ? flightDate === departureDate : true; // Kalkış tarihi kontrolü
      const returnDateMatch = !isOneWay ? (returnDate ? flightDate === returnDate : true) : true; // Dönüş tarihi kontrolü

      return fromMatch && toMatch && dateMatch && returnDateMatch;
    });
    setFilteredFlights(results);
  };

  const handleOneWayClick = () => {
    setIsOneWay(true);
    // "To" alanını sıfırlamayacağız
  };

  const handleRoundTripClick = () => {
    setIsOneWay(false);
  };

  return (
    <div className="container-fluid text-center" style={{ height: "100vh", width: "210vh", overflowX: "hidden" }}>
      {/* Üst kısım */}
      <div className="row" style={{ height: "10%", backgroundColor: "#f6f4f8" }}>
        <div className="col-12 col-md d-flex align-items-center justify-content-center">
          <img src={FlightLogo} alt="Flight Logo" style={{ width: "50px", height: "50px" }} />
          <p style={{ marginRight: "300px", marginTop: "10px", color: "#252525" }}> PLANE SCAPE </p>
        </div>
        <div className="col-12 col-md d-flex align-items-center justify-content-center"></div>
        <div className="col-12 col-md d-flex align-items-center justify-content-around">
          {/* Deals */}
          <div className="d-flex align-items-center">
            <img src={DealsLogo} alt="Deals Logo" style={{ width: "20px", height: "20px", marginLeft: "100px" }} />
            <p style={{ marginLeft: "5px", marginTop: "10px", color: "#252525" }}> Deals </p>
          </div>
          {/* Discover */}
          <div className="d-flex align-items-center">
            <img src={DiscoverLogo} alt="Discover Logo" style={{ width: "20px", height: "20px" }} />
            <p style={{ marginLeft: "5px", marginTop: "10px", color: "#252525" }}> Discover </p>
          </div>
          {/* Joane Smith */}
          <div className="d-flex align-items-center">
            <img src={AvatarLogo} alt="Avatar Logo" style={{ width: "33px", height: "35px", borderRadius: "50px" }} />
            <p style={{ marginLeft: "5px", marginTop: "10px", color: "#252525" }}> Joane Smith </p>
          </div>
        </div>
      </div>

      {/* Orta kısım */}
      <div className="row" style={{ height: "30%" }}>
        <div style={{ backgroundColor: "white" }} className="col-12 col-md col-lg-9 d-flex align-items-center justify-content-center">
          <div className="choosing-a-round-trip-container d-flex flex-column">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="d-flex align-items-center">
                <img src="https://cdn-icons-png.flaticon.com/512/84/84075.png" alt="Round Trip" style={{ width: "50px", height: "50px" }} />
                <p className="ms-2">Book Your Flight</p>
              </div>
              <div className="d-grid gap-2 d-md-block">
                <button className="btn btn-primary left-rounded" type="button" onClick={handleRoundTripClick}>Round trip</button>
                <button className="btn btn-primary right-rounded" type="button" onClick={handleOneWayClick}>One way</button>
              </div>
            </div>
            <div className="additional-info d-flex justify-content-between">
              <input
                type="text"
                placeholder="From"
                className="form-control form-control-sm me-2"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
              <input
                type="text"
                placeholder="To"
                className="form-control form-control-sm me-2"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
              <input
                type="date"
                className="form-control form-control-sm me-2"
                onChange={(e) => setDepartureDate(e.target.value)}
              />
              {!isOneWay && (
                <input
                  type="date"
                  className="form-control form-control-sm"
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              )}
            </div>
            <button className="btn btn-success btn-sm mt-3" style={{ width: "115px", backgroundColor: "#4a1c97", color: "white" }} onClick={handleSearch}>Show flights</button>
          </div>
        </div>

        {/* Sağ kısım */}
        <div style={{ backgroundColor: "#f6f4f8" }} className="col-12 col-md d-flex align-items-center justify-content-center">
          <img style={{ borderRadius: "25px", height: "180px", width: "180px" }} src="https://i.pinimg.com/236x/dc/c0/eb/dcc0eb2ba33b04355992705ffe889c23.jpg" alt="Image" />
        </div>
      </div>

      {/* Üçüncü satır - Sol %50, Orta %25, Sağ %25 */}
      <div className="row" style={{ height: "60%" }}>
        <div style={{ backgroundColor: "aqua" }} className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
          <div className="flex-wrap justify-content-center">
            {filteredFlights.slice(0, 2).map((flight, index) => {
              const flightStates = flight.publicFlightState?.flightStates || [];
              const departureStatus = flightStates[0] || 'Bilinmiyor';
              const arrivalStatus = flightStates[1] || 'Bilinmiyor';
              const flightDate = flight.scheduleDateTime.split('T')[0]; // Uçuş tarihini al

              return (
                <div key={index} className="card m-2" style={{ width: '700px', height: '175px', padding: '10px' }}>
                  <strong>{flight.flightName}</strong><br />
                  Kalkış: {departureStatus} - Varış: {arrivalStatus}<br />
                  Zaman: {flightDate}<br /> {/* Uçuş tarihi burada gösteriliyor */}
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ backgroundColor: "#f6f4f8" }} className="col-12 col-md-3 d-flex align-items-center justify-content-center">
          {/* New sorting/filtering options */}
          <div style={{ width: "100%"}}>
            <h5 style={{marginRight:"280px"}}>Sort by:</h5>
            <select className="form-select" aria-label="Sort by" style={{ marginBottom: '10px', width: '90%' }}>
              <option value="lowestPrice">Lowest Price</option>
              <option value="highestPrice">Highest Price</option>
            </select>

            <h5 style={{marginRight:"240px"}}>Arrival Time</h5>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <input type="radio" id="morning" name="arrivalTime" value="5AM-12PM" />
              <label htmlFor="morning" style={{ marginLeft: '10px' }}>5:00 AM - 11:59 AM</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <input type="radio" id="afternoon" name="arrivalTime" value="12PM-6PM" />
              <label htmlFor="afternoon" style={{ marginLeft: '10px' }}>12:00 PM - 5:59 PM</label>
            </div>

            <h5 style={{marginRight:"300px"}}>Stops</h5>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <input type="radio" id="nonstop" name="stops" value="nonstop" />
              <label htmlFor="radio" style={{ marginLeft: '10px', paddingRight: '20px' }}>Nonstop</label>
              <span style={{ marginLeft: 'auto' }}>$230</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <input type="radio" id="1stop" name="stops" value="1stop" />
              <label htmlFor="1stop" style={{ marginLeft: '10px', paddingRight: '20px' }}>1 Stop</label>
              <span style={{ marginLeft: 'auto' }}>$230</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <input type="radio" id="2stops" name="stops" value="2stops" />
              <label htmlFor="2stops" style={{ marginLeft: '10px', paddingRight: '20px' }}>2+ Stops</label>
              <span style={{ marginLeft: 'auto' }}>$230</span>
            </div>

            <h5 style={{marginRight:"200px"}}>Airlines Included</h5>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <input type="radio" id="alitalia" name="airlines" value="alitalia" />
              <label htmlFor="alitalia" style={{ marginLeft: '10px', paddingRight: '20px' }}>Alitalia</label>
              <span style={{ marginLeft: 'auto' }}>$230</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <input type="radio" id="lufthansa" name="airlines" value="lufthansa" />
              <label htmlFor="lufthansa" style={{ marginLeft: '10px', paddingRight: '20px' }}>Lufthansa</label>
              <span style={{ marginLeft: 'auto' }}>$230</span>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: "#f6f4f8" }} className="col-12 col-md-3 d-flex flex-column align-items-center justify-content-center">
          <div>
            <img style={{ height: "180px", borderRadius: "25px", width: "180px" }} src="https://img.freepik.com/premium-vector/hotel-icon-logo-vector-design-template_827767-3569.jpg" alt="Hotel Icon" />
          </div>
          <div>
            <img style={{ marginTop: "40px", height: "180px", borderRadius: "25px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreAVDNDZYXOI9uLp5BpD1UPnxvttddtLj1A&s" alt="Another Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
