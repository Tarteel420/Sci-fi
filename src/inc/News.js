
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ass1 from "../images/ass1.jpg";
import ass2 from "../images/ass2.jpg";

const News = () => {
  useEffect(() => {
    const cardSection = document.querySelector(".card-container");
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    cards.forEach(card => {
      observer.observe(card);
    });
  }, []);

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
        marginLeft: "-300px",
        // marginTop: "250px",
      }}
    >
      ASTRONOMY NEWS
    </span>
  </div>

  <section
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "100px",
    }}
  >
    <div
      className="card-container"
      style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
    >
      <div className="card" style={{ width: "30rem", border: "none" }}>
        <img
          src={ass2}
          className="card-img-top"
          style={{ height: "500px", width: "500px" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title" style={{ color: "white" }}>
            Ingredient of Life Found Around Infant Sun-Like Stars
          </h5>
          <p className="card-text">
            ALMA has observed stars like the Sun at a very early stage in
            their formation and found traces of methyl isocyanate — a
            chemical building block of life.
          </p>
          <Link
            to="/astrology"
            className="btn"
            style={{ background: "gray", color: "white" }}
          >
            Read more
          </Link>
        </div>
      </div>

      <div className="card" style={{ width: "30rem", border: "none" }}>
        <img
          src={ass1}
          style={{ height: "500px", width: "500px" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title" style={{ color: "white" }}>
            Astronomers Find Planet Hotter Than Most Stars
          </h5>
          <p className="card-text">
            A newly discovered Jupiter-like world is so hot, it's being
            vaporized by its own star. With a dayside temperature of more
            than 7,800 degrees Fahrenheit
          </p>
          <Link
            to="/astrology"
            className="btn"
            style={{ background: "gray", color: "white" }}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}

export default News;

