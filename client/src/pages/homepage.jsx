import React from "react";
import FlightLogo from "../assets/flightlogo.png";
import DealsLogo  from "../assets/deals.svg";
import DiscoverLogo from "../assets/discover.svg";
import AvatarLogo from "../assets/Avatar.png";

function Homepage() {
    return (
      <>
      <div className="container-fluid text-center" style={{ height: '100vh', width: '210vh', overflowX: 'hidden' }}>
        <div className="row" style={{ height: '10%', backgroundColor :"#f6f4f8" }}>
          <div  className="col-12 col-md d-flex align-items-center justify-content-center">
           <img src={FlightLogo} alt="Flight Logo" style={{ width: '50px', height: '50px'}}/> <p style={{marginRight:"300px",marginTop:"10px",color:'#252525'}}> PLANE SCAPE </p>
          </div>
          <div className="col-12 col-md d-flex align-items-center justify-content-center">
      {/* Search Bar,sonradan eklenmek istendiğinde buraya gelecek*/}
          </div>
          <div className="col-12 col-md d-flex align-items-center justify-content-around">
  {/* Deals */}
  <div className="d-flex align-items-center">
    <img src={DealsLogo} alt="Deals Logo" style={{ width: '20px', height: '20px',marginLeft:'100px'}} />
    <p style={{ marginLeft: "5px", marginTop: "10px", color: '#252525' }}> Deals </p>
  </div>

  {/* Discover */}
  <div className="d-flex align-items-center">
    <img src={DiscoverLogo} alt="Discover Logo" style={{ width: '20px', height: '20px'}} />
    <p style={{ marginLeft: "5px", marginTop: "10px", color: '#252525' }}> Discover </p>
  </div>

  {/* Joane Smith */}
  <div className="d-flex align-items-center">
    <img src={AvatarLogo} alt="Avatar Logo" style={{ width: '33px', height: '35px',borderRadius:"50px"}} />
    <p style={{ marginLeft: "5px", marginTop: "10px", color: '#252525' }}> Joane Smith </p>
  </div>
</div>
        </div>
        <div className="row" style={{ height: '40%' }}>
          <div style={{ backgroundColor: "lightblue"}} className="col-12 col-md col-lg-9 d-flex align-items-center justify-content-center">
            1 of 3
          </div>
         
          <div style={{ backgroundColor: "lightpink" }} className="col-12 col-md d-flex align-items-center justify-content-center">
            3 of 3
          </div>
          
        </div>
        
        {/* Üçüncü satır - Sol %50, Orta %25, Sağ %25 */}
        <div className="row" style={{ height: "50%" }}>
          {/* Sol kısım - %50 genişlik (6 sütun) */}
          <div
            style={{ backgroundColor: "aqua" }}
            className="col-12 col-md-6 d-flex align-items-center justify-content-center"
          >
            1 of 3
          </div>

          {/* Orta kısım - %25 genişlik (3 sütun) */}
          <div
            style={{ backgroundColor: "lightcoral" }}
            className="col-12 col-md-3 d-flex align-items-center justify-content-center"
          >
            2 of 3
          </div>

          {/* Sağ kısım - %25 genişlik (3 sütun) */}
          <div
            style={{ backgroundColor: "yellow" }}
            className="col-12 col-md-3 d-flex align-items-center justify-content-center"
          >
            3 of 3
          </div>
        </div>
      </div>
      
    </>
     
    );
    }

export default Homepage;