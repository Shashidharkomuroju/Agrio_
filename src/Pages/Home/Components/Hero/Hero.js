import React from "react";
import { Link } from "react-router-dom";
import image from "../../../../assets/image.png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={image} alt="Background" />
      <div className="content">
        <h1>Agriculture</h1>
        <h2>
          & Organic <span></span> Market
        </h2>
        <Link>Show Now</Link>
      </div>
      <div className="container">
        <div className="card">
          <div className="img">
            <img src={require("../../../../assets/Return.png")} alt="" />
          </div>
          <div className="card-content">
            <h4>Return Policy</h4>
            <p>Money Back Guarantee</p>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src={require("../../../../assets/Icon.png")} alt="" />
          </div>
          <div className="card-content">
            <h4>Free Shipping</h4>
            <p>On All Orders Over $45.00</p>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src={require("../../../../assets/Icon1.png")} alt="" />
          </div>
          <div className="card-content">
            <h4>Store Locator</h4>
            <p>Find Your Nearest Store</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
