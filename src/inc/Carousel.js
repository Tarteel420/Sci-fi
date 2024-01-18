import React from "react";

function Carousel() {
  return (
    <div className="video-container">
      <video
        className="bg-video"
        src="../videos/ufology.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
      />
      <div>
        <h1 style={{ color: "white", fontFamily: "cursive" }}>
          <br />
          <br />
          Mysterious UFO Looks Humanoid--- <br />
          As It Hovers The Sky Puzzled drivers <br /> were left wondering if they had
          captured <br /> evidence of aliens visiting Earth__
        </h1>
      </div>
    </div>
  );
}

export default Carousel;
