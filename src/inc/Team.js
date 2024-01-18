import React from "react";
import t1 from "../images/t1.jpg";
import t2 from "../images/t2.jpg";
import t3 from "../images/t3.jpg";
import t4 from "../images/t4.jpg";

import { Link } from "react-router-dom";

const Team = () => {
  return (
    
    <>
    <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100px", marginTop: "120px" }}
      >
        <span
          className="badge"
          style={{
            width: "320px",
            height: "50px",
            fontSize: "54px",
            fontFamily: "cursive",
            // marginTop: "250px",
          }}
        >
         OUR TEAM
        </span>
      </div>



    <div className="card-container" style={{ marginLeft: "30px", marginBottom:"200px", marginTop:"-100px" }}>
      <div
        className="card"
        style={{ width: "18rem", marginTop: "150px", border: "none" }}
      >
        <img src={t1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" style={{ color: "white" }}>
          Theresa Webb
          </h5>
          <p className="card-text">
          LEAD ASTRONOMER, FOUNDER
          </p>
      
        </div>
      </div>



      <div
        className="card"
        style={{ width: "18rem", marginTop: "150px", border: "none" }}
      >
        <img src={t2} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" style={{ color: "white" }}>
          Jenny Wilson        </h5>
          <p className="card-text">
          ANALYST
 
          </p>
     
        </div>
      </div>
      <div
        className="card"
        style={{ width: "18rem", marginTop: "150px", border: "none" }}
      >
        <img src={t3} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" style={{ color: "white" }}>
          Jacob Jones        </h5>
          <p className="card-text">
          PR MANAGER
          </p>
       
        </div>
      </div>
      <div
        className="card"
        style={{ width: "18rem", marginTop: "150px", border: "none" }}
      >
        <img src={t4} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" style={{ color: "white" }}>
          Bessie Cooper       </h5>
          <p className="card-text">
          ENGINEER
          </p>
        
        </div>
      </div>

    </div>
    </>
  );
};

export default Team;
