import React from "react";
import team1 from "../images/team1.jpg";
import team2 from "../images/team2.jpg";

const Astrologers = () => {
  return (
    <section style={{background:"black"}}>
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
            marginLeft:"-280px"
            // marginTop: "250px",
          }}
        >
          OUR ASTROLOGERS
        </span>
      </div>
      <div className="row g-0 position-relative blog-container">
        <div className="col-md-6 mb-md-0 p-md-4">
          <img
            src={team1}
            style={{ height: "200px", width: "200px" }}
            alt="..."
          />
        </div>
        <div className="col-md-6 p-4 ps-md-0">
          <div className="blog-content">
            <h1 style={{ color: "white", textAlign: "center" }}>
            Carolyn Elliott
            </h1>
            <p
              style={{
                textAlign: "center",
                color: "gray",
                fontSize: "20px",
                fontFamily: "sans-serif",
              }}
            >
              Carolyn is a talented and highly experienced astrologer offering private consultations to our clients and visitors
            </p>
          </div>
        </div>
      </div>
      <div className="row g-0 position-relative blog-container">
        <div className="col-md-6 mb-md-0 p-md-4">
          <img
            src={team2}
            style={{ height: "200px", width: "200px" }}
            alt="..."
          />
        </div>
        <div className="col-md-6 p-4 ps-md-0">
          <div className="blog-content">
            <h1 style={{ color: "white", textAlign: "center" }}>
            Emma Elliott
            </h1>
            <p
              style={{
                textAlign: "center",
                color: "gray",
                fontSize: "20px",
                fontFamily: "sans-serif",
              }}
            >
             Carolyn’s sister, Emma, has been practicing astrology since 1999. She believes that astrology unveils our inner dynamics of life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Astrologers;
