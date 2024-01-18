

import React from "react";

import { Link } from "react-router-dom";

const Pricing = () => {
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
          PRICING
        </span>
      </div>

      <div
        className="card-container"
        style={{ marginLeft: "30px", marginTop: "-70px", marginBottom:"100px" }}
      >
        <div className="card" style={{ width: "18rem", marginTop: "150px" }}>
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                color: "white",
                fontSize: "30px",
                fontFamily: "cursive",
              }}
            >
              Basic
            </h5>
            <p
              className="card-text"
              style={{
                fontSize: "15px",
                color: "white",
                fontFamily: "cursive",
              }}
            >
              Personal Horoscopes <br />
              One-Hour Readings <br />
              Personal Charts <br />
              Job Charts <br />
              Yearly Updates <br /> <br /> <br />
              <span  style={{ fontSize: "30px" }}> $49.00</span>
            </p>
            <Link
              to="/contact"
              className="btn"
              style={{ background: "#301934", color: "white" }}
            >
              Order Now
            </Link>
          </div>
        </div>

        <div className="card" style={{ width: "18rem", marginTop: "150px" }}>
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                color: "white",
                fontSize: "30px",
                fontFamily: "cursive",
              }}
            >
              Standard
            </h5>
            <p
              className="card-text"
              style={{
                fontSize: "15px",
                color: "white",
                fontFamily: "cursive",
              }}
            >
              Regular Horoscopes <br />
              Vocational Readings <br />
              Medical Astrology <br />
              Relationship Compatibility <br />
              Location Astrology <br /> <br /> <br />
              <span  style={{ fontSize: "30px" }}> $119.00</span>

            </p>
            <Link
              to="/contact"
              className="btn"
              style={{ background: "#301934", color: "white" }}
            >
              Order Now
            </Link>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", marginTop: "150px" }}>
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                color: "white",
                fontSize: "30px",
                fontFamily: "cursive",
              }}
            >
              Family
            </h5>
            <p
              className="card-text"
              style={{
                fontSize: "15px",
                color: "white",
                fontFamily: "cursive",
              }}
            >
              Family Horoscopes <br />
              Marriage Compatibility <br />
              Fertility Enhancement <br />
              Natal Readings <br />
              Birth Charts <br /> <br /> <br />
              <span  style={{ fontSize: "30px" }}> $167.00</span>
            </p>
            <Link
              to="/contact"
              className="btn"
              style={{ background: "#301934", color: "white" }}
            >
              Order Now
            </Link>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", marginTop: "150px" }}>
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                color: "white",
                fontSize: "30px",
                fontFamily: "cursive",
              }}
            >
              Business
            </h5>
            <p
              className="card-text"
              style={{
                fontSize: "15px",
                color: "white",
                fontFamily: "cursive",
              }}
            >
              Astrology Consultations <br />
              Real Estate Readings <br />
              Timing Astrology <br />
              Financial Astrology <br />
              Electional Readings <br /> <br /> <br />
              <span style={{ fontSize: "30px" }}> $256.00</span>
            </p>
            <Link
              to="/contact"
              className="btn"
              style={{ background: "#301934", color: "white" }}
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
