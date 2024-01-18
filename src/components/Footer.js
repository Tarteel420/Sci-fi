import React from "react";
import { Link } from "react-router-dom";
function Footer(){
    return(
        <section className="section footer  text-white"  style={{ backgroundColor: "#36454F" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Company Info</h6> 
                        <hr/>
                        <p>Science is a research-based organization with a mission to investigate and report evidence of extra-terrestrial, UFO, and other phenomena to a global audience. Our team provides daily news, updates, and articles about UFOs. </p>
                    </div>
                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <hr/>
                        <div><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link></div>
                        <div><Link to="/ufology" style={{ textDecoration: 'none', color: 'white' }}>UFOLOGY</Link></div>
                        <div><Link to="/astronomy" style={{ textDecoration: 'none', color: 'white' }}>ASTRONOMY</Link></div>
                        <div><Link to="/astrology" style={{ textDecoration: 'none', color: 'white' }}>ASTROLOGY</Link></div>
                        <div><Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>Contact US</Link></div>
                    </div>
                    <div className="col-md-4">
                        <h6>Contact Info</h6>
                        <hr/>
                        <div><p className="text-white mb-1">phase 8 Islamabad</p></div>
                        <div><p className="text-white mb-1">03217089994</p></div>
                        <div><p className="text-white mb-1">98877678</p></div>
                        <div><p className="text-white mb-1">ngo@gmail.com</p></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Footer;
