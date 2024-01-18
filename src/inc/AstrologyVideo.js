import React from "react";

function AstrologyVideo() {
  return (
    <div className="video-container">
      <video
        className="bg-video"
        src="../videos/astrology.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
      />
      <div>
        <h1 style={{ color: "white", fontFamily: "cursive",  }}>
          
          A Chance to Know  <br /> Your Destiny
        </h1>
      </div>
    </div>
  );
}

export default AstrologyVideo;
