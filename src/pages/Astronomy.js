import React from "react";
import AstroVideo from "../inc/AstroVideo";
import ass from "../images/ass.jpg";

import sight from "../images/sight.jpg";
import News from "../inc/News";

const Astronomy = () => {
  return (
    <div>
      <AstroVideo />

      {/* image section  */}
      <section style={{ marginTop: "100px" }}>
        <div class="row g-0 position-relative blog-container">
          <div class="col-md-6 mb-md-0 p-md-4">
            <img src={ass} class="w-100" alt="..." />
          </div>
          <div class="col-md-6 p-4 ps-md-0">
            <div class="blog-content">
              <h1 class="mt-5" style={{ textAlign: "center", color: "white" }}>
                National Observatory & Research Center for Night-time Astronomy
              </h1>
              <p
                style={{
                  textAlign: "center",
                  color: "gray",
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                }}
              >
                Science is the US national research & development center for
                ground-based night-time astronomy. Our mission is to provide
                public access to qualified professional researchers to forefront
                scientific capabilities on telescopes operated by our experts as
                well as other optical devices. Today, these telescopes range in
                aperture size from 2 m to 10 m.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* news section  */}

     <News/>

      {/* SIGHT  */}

      <div>
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
              marginLeft:"-200px"
              // marginTop: "250px",
            }}
          >
            Night Excursions <br /> to the Observatory
          </span>
        </div>

        <img
          src={sight}
          class="img-fluid"
          alt="..."
          style={{ marginTop: "100px", marginBottom:"100px"}}
        />
      </div>
    </div>
  );
};

export default Astronomy;
