import React from "react";

const Section6 = () => {
  return (
    <section className="section6">
      <div className="section6-content">
        <h5>Our Testimonials</h5>
        <h2>What They Say</h2>
      </div>
      <div className="section6-img">
        <div className="card">
          <div className="car1">
            <img src={require("../../../../assets/apple6.png")} alt="" />
          </div>
          <div className="car2">
            <img src={require("../../../../assets/avatar1.png")} alt="" />
          </div>
        </div>
        <div className="card1">
          <div className="car3">
            <img src={require("../../../../assets/wrap.png")} alt="" />
          </div>
          <div className="car4">
            <img src={require("../../../../assets/avatar.png")} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
