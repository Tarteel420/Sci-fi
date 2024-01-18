import React from 'react'
import AstrologyVideo from '../inc/AstrologyVideo';
import HoroscopePage from '../inc/HoroscopeBlock';
import Astrologers from '../inc/Astrologers';
import Prediction from '../inc/Prediction';
import AstrologyBlogs from '../inc/AstrologyBlogs';
import Pricing from '../inc/Pricing';
const Astrology = () => {
  return (
    <div>
      <AstrologyVideo/>
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
      QUICK HOROSCOPE
    </span>
  </div>


  <HoroscopePage/>
  <Astrologers/>
  <Prediction/>
  <AstrologyBlogs/>
  <Pricing/>



 
    </div>
  )
}

export default Astrology
