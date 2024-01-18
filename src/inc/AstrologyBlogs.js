import React from "react";
import ab1 from "../images/ab1.jpg";
import ab2 from "../images/ab2.jpg";
import ab3 from "../images/ab3.jpg";
import ab4 from "../images/ab4.jpg";

import { Link } from "react-router-dom";

const AstrologyBlogs = () => {
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
          BLOGS
        </span>
      </div>



    <div className="card-container" style={{ marginLeft: "30px" }}>
      <div
        className="card"
        style={{ width: "18rem", marginTop: "150px", border: "none" }}
      >
        <img src={ab1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" style={{ color: "white" }}>
          Mercury's Transit of Aquarius
          </h5>
          <p className="card-text">
          Mercury enters Aquarius on January 31st. This is one of the better signs for the planet of information
          </p>
          <Link
            to="/astronomy"
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
        <img src={ab2} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" style={{ color: "white" }}>
          Full Moon Eclipse in Leo: The Great Mother          </h5>
          <p className="card-text">
          The January 31st Full Moon eclipse (11 degrees Leo) conjoins Ceres Rx, so this conclusion or result will fully illuminate a mother 
          </p>
          <Link
            to="/astronomy"
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
        <img src={ab3} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" style={{ color: "white" }}>
          Mars' Transit Of Sagittarius          </h5>
          <p className="card-text">
          Mars enters Sagittarius on January 26th (7:56 AM EST). The far horizons beckon and restrictions will not be tolerated
          </p>
          <Link
            to="/astronomy"
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
          src={ab4}
          style={{ height: "195px" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title" style={{ color: "white" }}>
          Horoscopes for January 28th to February 4th, 2020          </h5>
          <p className="card-text">
          The January 31st Full Moon eclipse in Leo is surrounded by multiple aspects to Venus in Aquarius. As I explained in this post,
          </p>
          <Link
            to="/astronomy"
            className="btn"
            style={{ background: "gray", color: "white" }}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default AstrologyBlogs;
