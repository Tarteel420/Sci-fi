import React from "react";
import aboutus from "../images/aboutus.jpg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section>
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
          ABOUT US
        </span>
      </div>
      <div class="row g-0 position-relative blog-container">
        <div class="col-md-6 mb-md-0 p-md-4">
          <img src={aboutus} class="w-100" style={{height:"500px"}} alt="..." />
        </div>
        <div class="col-md-6 p-4 ps-md-0">  
          <div class="blog-content">
            <h1 style={{color:"gray", textAlign:"center"}}>Few words about us
            </h1>
            <p
              style={{
                textAlign: "center",
                color: "white",
                fontSize: "30px",
                fontFamily: "sans-serif",
              }}
            >
            Science is a research-based organization with
              a mission to investigate and report evidence of extra-terrestrial,
              UFO, and other phenomena to a global audience. Our team provides
              daily news, updates, and articles about UFOs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
