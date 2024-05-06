import React from "react";
import img1 from "../../../../assets/master.png";
import img2 from "../../../../assets/master1.png";
import img3 from "../../../../assets/master2.png";

const Model5 = () => {
  return (
    <section className="model5">
      <div className="model5-content">
        <h5>Team Members</h5>
        <h2>Meet Our Farmers</h2>
      </div>
      <div className="model5-cards">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
    </section>
  );
};

export default Model5;
