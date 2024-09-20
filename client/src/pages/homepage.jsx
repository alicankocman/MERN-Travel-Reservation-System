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
     <div className="row" style={{ height: '30%' }}>
          <div style={{ backgroundColor: "white"}} className="col-12 col-md col-lg-9 d-flex align-items-center justify-content-center">
            1 of 3
          </div>
          <div style={{ backgroundColor: "#f6f4f8" }} className="col-12 col-md d-flex align-items-center justify-content-center">
            <img style={{borderRadius:"25px",height:"180px","width":"180px"}} src="https://i.pinimg.com/236x/dc/c0/eb/dcc0eb2ba33b04355992705ffe889c23.jpg"></img>
          </div>
        </div>
        
        {/* Üçüncü satır - Sol %50, Orta %25, Sağ %25 */}
        <div className="row" style={{ height: "60%" }}>
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
  style={{ backgroundColor: "#f6f4f8" }}
  className="col-12 col-md-3 d-flex flex-column align-items-center justify-content-center"
>
  <div>
    <img style={{ height: "180px", borderRadius: "25px", width:"180px" }} src="https://img.freepik.com/premium-vector/hotel-icon-logo-vector-design-template_827767-3569.jpg" alt="Hotel Icon" />
  </div>
  <div>
    <img style={{ marginTop:"40px",height: "180px", borderRadius: "25px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreAVDNDZYXOI9uLp5BpD1UPnxvttddtLj1A&s" alt="Another Image" />
  </div>
</div>

        </div>
      </div>
      
    </>
     
    );
    }

export default Homepage;