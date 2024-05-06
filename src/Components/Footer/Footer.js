import React from "react";
import { Link } from "react-router-dom";
import fb from "../../assets/facebook.png";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";

import "../Footer/Footer.css"

const Footer = () => {

  let social = [fb , insta , twitter]
  return (
    <footer>
      <div className="logo">
        <img src={require("../../assets/Logo.png")} alt="" />
        <p>
          There are many variations of passages <span></span> of lorem ipsum
          available, but the <span></span> majority suffered.
        </p>
        <div className="social">
          {
            social.map((item) =>{
              return (
                <img src={item} alt="" />      
              )
            })
          }
        </div>
      </div>
      <div className="links">
        <h3>Explore</h3>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Services">Services</Link>
        <Link>Our Project</Link>
        <Link>Meet the Farmers</Link>
        <Link>Latest News</Link>
        <Link>Contact</Link>
      </div>
      <div className="news">
        <h3>News</h3>
        <div className="new1">
          <h5>Bringing Food Production <br /> Back To Cities</h5>
          <h6>April 15, 2024</h6>
        </div>
        <div className="new1">
          <h5>Bringing Food Production <br /> Back To Cities</h5>
          <h6>April 15, 2024</h6>
        </div>
      </div>
      <div className="contact">
        <h3>Contact</h3>
        <div className="box">
          <img src={require("../../assets/phone.png")} alt="" />
          <h5>777777777</h5>
        </div>
        <div className="box">
          <img src={require("../../assets/mail.png")} alt="" />
          <h5>shashidhar.komuroju22@gmail.com</h5>
        </div>
        <div className="box">
          <img src={require("../../assets/location.png")} alt="" />
          <h5>80 broklyn golden street line New York, USA</h5>
        </div>
        <img src={require("../../assets/Form.png")} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
