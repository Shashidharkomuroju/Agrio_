import React from "react";
import { Link } from "react-router-dom";

const Section3 = () => {
  return (
    <section className="section3">
      <div className="section3-content">
        <h5>Special Offers</h5>
        <h2>Today's Hot Deal</h2>
      </div>
      <div className="section3-cards">
        <div className="card1">
          <div className="img">
            <img src={require("../../../../assets/veg.png")} alt="" />
          </div>
          <div className="img-content">
            <h5>Vegetables</h5>
            <p>$100.00</p>
            <Link>Add to Cart</Link>
          </div>
        </div>
        <div className="card2">
          <div className="img">
            <img src={require("../../../../assets/onian1.png")} alt="" />
          </div>
          <div className="img-content">
            <h5>Onions</h5>
            <p>$100.00</p>
            <Link>Add to Cart</Link>
          </div>
        </div>
        <div className="card3">
          <div className="img">
            <img src={require("../../../../assets/tomato1.png")} alt="" />
          </div>
          <div className="img-content">
            <h5>Apple</h5>
            <p>$100.00</p>
            <Link>Add to Cart</Link>
          </div>
        </div>
        <div className="card4">
          <div className="img">
            <img src={require("../../../../assets/pears.png")} alt="" />
          </div>
          <div className="img-content">
            <h5>Pears</h5>
            <p>$100.00</p>
            <Link>Add to Cart</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
