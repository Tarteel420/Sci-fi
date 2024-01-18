import React from "react";

function AstroVideo() {
  return (
    <div className="video-container">
      <video
        className="bg-video"
        src="../videos/astronomy.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
      />
      <div>
        <h1 style={{ color: "white", fontFamily: "cursive", textAlign:"center" }}>
          <br />
          <br />
          Astronomy Compels the Soul to Look Upwards and Leads us from This World to Another
        </h1>
      </div>
    </div>
  );
}

export default AstroVideo;
