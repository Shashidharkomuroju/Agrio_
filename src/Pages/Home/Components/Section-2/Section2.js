import React from "react";
import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <section className="section2">
      <div className="section2-element">
        <div className="element">
          <img src={require("../../../../assets/element.png")} alt="" />
          <div className="element-content">
            <h5>100% ORGANIC</h5>
            <h2>
              Quality Organic <span></span> Food Store
            </h2>
            <Link>
              <h6>Order Now</h6>
            </Link>
          </div>
        </div>
        <div className="element1">
          <img src={require("../../../../assets/element1.png")} alt="" />
          <div className="element-content1">
            <h5>100% ORGANIC</h5>
            <h2>
              Healthy Products <span></span> Everyday
            </h2>
            <Link>
              <h6>Order Now</h6>
            </Link>
          </div>
        </div>
      </div>
      <div className="section2-img">
      <img src={require("../../../../assets/section03.png")} alt="" />
      </div>
    </section>
  );
};

export default Section2;
