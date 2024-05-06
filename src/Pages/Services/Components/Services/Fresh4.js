import React from "react";
import img from "../../../../assets/fancy.png";
import img1 from "../../../../assets/box.png";
import img2 from "../../../../assets/box1.png";
import img3 from "../../../../assets/box2.png";

const Fresh4 = () => {
  return (
    <section className="fresh4">
      <div className="fresh4-img">
        <img src={img} alt="" />
      </div>
      <div className="fresh4-content">
        <h5>What We Do</h5>
        <h2>Healthy Food for Good <br /> Growth</h2>
        <p>
          Lorem ipsum dolor sit amet nsectetur cing elit. Suspe ndisse suscipit <br />
          sagittis leo sit met entum estibu dignissim posuere cubilia durae. Leo
          sit met <br /> entum cubilia crae onec.
        </p>
        <p>
          Lorem ipsum dolor sit amet adipiscing elit. Nulla placerat posuere
          dui. <br /> Pellentesque venenatis sem non lacus ac auctor.
        </p>
        <div className="card">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Fresh4;
