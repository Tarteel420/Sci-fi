import React from "react";
import a1 from "../images/a1.jpg";
import a2 from "../images/a2.jpg";
import a3 from "../images/a3.jpg";
import a4 from "../images/a4.jpg";
import a5 from "../images/a5.jpg";
import a6 from "../images/a6.jpg";
import a7 from "../images/a7.jpg";
import a8 from "../images/a8.jpg";
import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <div className="card-container" style={{ marginLeft: "30px" }}>
      <div
        className="card"
        style={{ width: "18rem", marginTop: "150px", border: "none" }}
      >
        <img src={a1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" style={{ color: "white" }}>
            Iowa Witness Recalls Late Night UFO Close Encounter
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link
            to="/projects"
            className="btn"
            style={{ background: "gray", color: "white" }}
          >
            Read More
          </Link>
        </div>
      </div>
      <div
        className="card"
        style={{ width: "18rem", marginTop: "150px", border: "none" }}
      >
        <img src={a2} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" style={{ color: "white" }}>
            Military Jets Chase Sphere UFO
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link
            to="/projects"
            className="btn"
            style={{ background: "gray", color: "white" }}
          >
            Read more
          </Link>
        </div>
      </div>
      <div
        className="card"
        style={{ width: "18rem", marginTop: "150px", border: "none" }}
      >
        <img src={a3} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" style={{ color: "white" }}>
            Virginia Witness Recalls Multiple UFOs in Night Sky
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link
            to="/projects"
            className="btn"
            style={{ background: "gray", color: "white" }}
          >
            Read More
          </Link>
        </div>
      </div>
      <div
        className="card"
        style={{ width: "18rem", marginTop: "150px", border: "none" }}
      >
        <img src={a4} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" style={{ color: "white" }}>
            Alleged UFO Photos Over China Lake Analyzed
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link
            to="/projects"
            className="btn"
            style={{ background: "gray", color: "white" }}
          >
            Read More
          </Link>
        </div>
      </div>
      <div
        className="card"
        style={{ width: "18rem", marginTop: "150px", border: "none" }}
      >
        <img src={a5} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" style={{ color: "white" }}>
            Arizona Witness Describes Six Hovering Discs
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link
            to="/projects"
            className="btn"
            style={{ background: "gray", color: "white" }}
          >
            Read More
          </Link>
        </div>
      </div>
      <div
        className="card"
        style={{ width: "18rem", marginTop: "150px", border: "none" }}
      >
        <img src={a6} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" style={{ color: "white" }}>
            Witness Describes ‘Huge’ Rectangle UFO Under 500 Feet
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link
            to="/projects"
            className="btn"
            style={{ background: "gray", color: "white" }}
          >
            Read More
          </Link>
        </div>
      </div>
      <div
        className="card"
        style={{ width: "18rem", marginTop: "150px", border: "none" }}
      >
        <img src={a7} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" style={{ color: "white" }}>
            Dubai Witness Describes Hovering Boomerang UFO
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link
            to="/projects"
            className="btn"
            style={{ background: "gray", color: "white" }}
          >
            Read More
          </Link>
        </div>
      </div>
      <div
        className="card"
        style={{ width: "18rem", marginTop: "150px", border: "none" }}
      >
        <img
          src={a8}
          style={{ height: "195px" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title" style={{ color: "white" }}>
            UFO Hovered Over The Beach In Marquette, Michigan
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link
            to="/projects"
            className="btn"
            style={{ background: "gray", color: "white" }}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Articles;
