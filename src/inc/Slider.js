import React from "react";

function Slider() {
  return (
    <div className="video-container">
      <video
        className="bg-video"
        src="../videos/slider.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
      />
      <div>
        <h1 style={{color:"white", fontFamily:"cursive"}}>
        
          welcome to Science — Multipurpose Theme <br /> for Ufology, Astronomy and 
          Astrology.
        </h1>
      </div>
    </div>
  );
}

export default Slider;
