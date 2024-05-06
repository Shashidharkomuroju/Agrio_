import React from "react";
import { Link } from "react-router-dom";

const Section4 = () => {
  return (
    <section className="section4">
      <div className="section4-img">
        <img src={require("../../../../assets/section4.png")} alt="" />
      </div>
      <div className="section4-content">
        <div className="content1">
          <h5>Quality Products</h5>
          <h2>Only Organic Food</h2>
          <p>
            There are many variations of passages of lorem ipsum available but
            the <span></span> majority have suffered alteration in some form by injected humor
            or <span></span> random word.
          </p>
        </div>
        <div className="content2">
            <div className="card">
                <div className="img">
                    <img src={require("../../../../assets/Icon3.png")} alt="" />
                </div>
                <div className="img-con">
                    <h4>Professional Farmers</h4>
                    <p>There are many variation of passages of lorem ipsum.</p>
                </div>
            </div>
            <div className="card">
                <div className="img">
                    <img src={require("../../../../assets/Icon4.png")} alt="" />
                </div>
                <div className="img-con">
                    <h4>Solution for Farming</h4>
                    <p>There are many variation of passages of lorem ipsum.</p>
                </div>
            </div>
        </div>
        <Link>Start Shopping Now</Link>
      </div>
    </section>
  );
};

export default Section4;
