import React from "react";
import image from "../../../../assets/customer.png";
import image1 from "../../../../assets/customer1.png";

const Model4 = () => {
  return (
    <section className="model4">
      <div className="model4-content">
        <h5>Our Testimonials</h5>
        <h2>What They Say</h2>
      </div>
      <div className="model-cards">
        <div className="card">
          <div className="img">
            <img src={image} alt="" />
          </div>
          <div className="content">
            <p>
              There are many variations of passage of <span></span> available but the majority
              have suffered <span></span> alteration in some form by injected <span></span> humor or
              randomed.
            </p>
            <div className="content1">
              <h6>Bonnie Tolbet</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="img">
            <img src={image1} alt="" />
          </div>
          <div className="content">
            <p>
              There are many variations of passage of <span></span> available but the majority
              have suffered <span></span> alteration in some form by injected <span></span> humor or
              randomed.
            </p>
            <div className="content1">
              <h6>Sarah Albert</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model4;
