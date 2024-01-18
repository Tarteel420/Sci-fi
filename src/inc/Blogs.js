
import React from "react";
import b2 from "../images/b2.jpg";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <section style={{ marginTop: "100px" }}>
      <div class="row g-0 position-relative blog-container">
        <div class="col-md-6 mb-md-0 p-md-4">
          <img src={b2} class="w-100" alt="..." />
        </div>
        <div class="col-md-6 p-4 ps-md-0">
          <div class="blog-content">
            <h1 class="mt-5" style={{ textAlign: "center", color: "white" }}>
              A Planet Hotter Than Most Stars
            </h1>
            <p
              style={{
                textAlign: "center",
                color: "white",
                fontSize: "30px",
                fontFamily: "sans-serif",
              }}
            >
              A newly discovered Jupiter-like world is so hot, it's being
              vaporized by its own star. With a dayside temperature of more
              than 7,800...
            </p>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
