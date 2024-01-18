import React from "react";
import prediction from "../images/prediction.jpg";

const Prediction = () => {
  return (
    <section>
      <div class="row g-0 position-relative blog-container">
        <div class="col-md-6 mb-md-0 p-md-4">
          <img
            src={prediction}
            class="w-100"
            style={{ height: "500px", marginTop: "200px" }}
            alt="..."
          />
        </div>
        <div class="col-md-6 p-4 ps-md-0">
          <div class="blog-content">
            <section >
            <h1
              style={{
                color: "gray",
                textAlign: "center",
                fontFamily: "cursive",
                marginTop: "100px",
              }}
            >
              Effective Prediction Techniques
            </h1>
            <p
              style={{
                textAlign: "center",
                color: "white",
                fontSize: "30px",
                fontFamily: "cursive",
              }}
            >
              Our astrologers use effective techniques for predictions,
              horoscopes as well as personal or family astrologic consultations.
             
            </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prediction;
