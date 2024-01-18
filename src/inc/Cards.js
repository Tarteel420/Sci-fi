import React from "react";
import i1 from "../images/i1.jpg";
import i2 from "../images/i2.jpg";
import i3 from "../images/i3.jpg";
import i4 from "../images/i4.jpg";

const Cards = () => {
  return (
    <section>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100px" }}
      >
        <span
          className="badge"
          style={{
            width: "320px",
            height: "50px",
            fontSize: "24px",
            // marginTop: "250px",
            background: "#301934",
          }}
        >
          NICHE THEMES
        </span>
      </div>
      <div
      style={{
        padding: "20px",
        display: "flex",
        gap: "80px", // Adjust the gap between images
        flexWrap: "wrap", // Allow images to wrap if container width is limited
      }}>
    
        <img
          src={i1}
        //   class="img-thumbnail"
          alt="..."
          style={{ width: "250px", height:"300px" }}
        ></img>
        <img
          src={i2}
        //   class="img-thumbnail"
          alt="..."
          style={{ width: "250px" , height:"300px" }}
        ></img>
        <img
          src={i3}
        //   class="img-thumbnail"
          alt="..."
          style={{ width: "250px" , height:"300px"  }}
        ></img>
        <img
          src={i4}
        //   class="img-thumbnail"
          alt="..."
          style={{ width: "250px" , height:"300px"  }}
        ></img>
      </div>
    </section>
  );
};

export default Cards;
