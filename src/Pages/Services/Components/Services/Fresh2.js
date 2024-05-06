import { useState } from "react";
import React from "react";
import img1 from "../../../../assets/s1.png";
import img2 from "../../../../assets/s2.png";
import img3 from "../../../../assets/s3.png";
import img4 from "../../../../assets/s4.png";

const More = () => {
  const [isVisible, setVisible] = useState(!false);
  const [isVisible1, setVisible1] = useState(!false);
  const [click, setClick] = useState(!false);
  const [click1, setClick1] = useState(!false);

  return (
    <>
      <section className="fresh2">
        <div className="fresh2-cards">
          <div className="card1">
            <div className="img">
              <img src={img1} alt="" />
            </div>
            <div className="content">
              {/* <img src={icon1} alt="" /> */}
              <h5>
                Agriculture <br /> Products
              </h5>
              <button onClick={() => setVisible(!isVisible)}>Read More</button>
              {/* {isVisible && (
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.Repellat, quidem? adipisicing elit.Repellat
                </p>
              </div>
            )} */}
            </div>
          </div>
          <div className="card2">
            <div className="img">
              <img src={img2} alt="" />
            </div>
            <div className="content1">
              {/* <img src={icon2} alt="" /> */}
              <h5>
                Organic <br /> Products
              </h5>
              <button onClick={() => setVisible1(!isVisible1)}>
                Read More
              </button>
              {/* {isVisible1 && (
                <div className="pop">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.Repellat, quidem? adipisicing elit.Repellat
                  </p>
                </div>
              )} */}
            </div>
          </div>
          <div className="card3">
            <div className="img">
              <img src={img3} alt="" />
            </div>
            <div className="content2">
              {/* <img src={icon3} alt="" /> */}
              <h5>Vegetables</h5>
              <button onClick={() => setClick(!click)}>Read More</button>
              {/* {click && (
                <div className="pop">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.Repellat, quidem? adipisicing elit.Repellat
                  </p>
                </div>
              )} */}
            </div>
          </div>
          <div className="card4">
            <div className="img">
              <img src={img4} alt="" />
            </div>
            <div className="content3">
              {/* <img src={icon4} alt="" /> */}
              <h5>Dairy</h5>
              <button onClick={() => setClick1(!click1)}>Read More</button>
              {/* {click1 && (
                <div className="pop">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.Repellat, quidem? adipisicing elit.Repellat
                  </p>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </section>
      <section className="pop">
        {isVisible && (
          <div>
            <p>
              Agricultural products are goods that come from plants, animals,
              and microorganisms. They are also known as agro products,
              agricultural produce, and agro produce. Agricultural products can
              be categorized into four types: Food Includes all food items for
              human and animal consumption, such as animal feed, farmed fish,
              and honey Fuel Substances that can release energy to produce heat
              or power, such as corn and sugarcane, which can create ethanol
              Livestock products Includes meat, such as beef, pork, poultry, and
              lamb, and dairy, such as milk, cheese, butter, and yogurt Crops
              Includes grains, such as wheat, rice, corn, barley, and oats, and
              oilseeds, such as soybeans, sunflower seeds, and canola
            </p>
          </div>
        )}
        {/* {isVisible1 && (
          <div className="pop">
            <p>
              Organic food is produced without the use of synthetic chemicals or
              genetically modified components, artificial fertilizers, or
              irradiation. Organic foods are not necessarily completely chemical
              free, but the pesticide residues will be considerably lower than
              those found in produce manufactured with synthetic chemicals.
              Organic farming practices reduce pollution, conserve water, reduce
              soil erosion, increase soil fertility, and use less energy.
            </p>
          </div>
        )} */}
        {/* {click && (
          <div className="pop">
            <p>
              Vegetables are a key part of a healthy diet, as they are
              nutrient-dense, containing lots of nutrition for a small amount of
              energy. They are low in calories and water content, with more than
              70% water, about 3.5% protein, and less than 1% fat. Vegetables
              are also good sources of vitamins A and C, minerals like calcium
              and iron, and dietary fiber and antioxidants. Experts recommend
              eating five servings of vegetables per day, which is about 60-80g,
              or one cup of salad vegetables or half a cup of cooked vegetables.
            </p>
          </div>
        )} */}
        {/* {click1 && (
          <div className="pop">
            <p>
              Dairy products, also known as milk products or lacticinia, are
              food products made from milk. Common dairy animals include cows,
              water buffalo, nanny goats, and ewes. Dairy products include milk,
              butter, cheese, and yogurt.
            </p>
          </div>
        )} */}
      </section>
      <section className="pop">
      {isVisible1 && (
          <div className="pop">
            <p>
              Organic food is produced without the use of synthetic chemicals or
              genetically modified components, artificial fertilizers, or
              irradiation. Organic foods are not necessarily completely chemical
              free, but the pesticide residues will be considerably lower than
              those found in produce manufactured with synthetic chemicals.
              Organic farming practices reduce pollution, conserve water, reduce
              soil erosion, increase soil fertility, and use less energy.
            </p>
          </div>
        )}
      </section>
      <section className="pop">
      {click && (
          <div className="pop">
            <p>
              Vegetables are a key part of a healthy diet, as they are
              nutrient-dense, containing lots of nutrition for a small amount of
              energy. They are low in calories and water content, with more than
              70% water, about 3.5% protein, and less than 1% fat. Vegetables
              are also good sources of vitamins A and C, minerals like calcium
              and iron, and dietary fiber and antioxidants. Experts recommend
              eating five servings of vegetables per day, which is about 60-80g,
              or one cup of salad vegetables or half a cup of cooked vegetables.
            </p>
          </div>
        )}
      </section>
      <section className="pop">
      {click1 && (
          <div className="pop">
            <p>
              Dairy products, also known as milk products or lacticinia, are
              food products made from milk. Common dairy animals include cows,
              water buffalo, nanny goats, and ewes. Dairy products include milk,
              butter, cheese, and yogurt.
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default More;
