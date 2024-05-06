import React from "react";

import "../Services/ServicesStyle.css";
import Navbar from "../../Components/Navbar/Navbar";
import Service1 from "./Components/Services/Service1";
import Fresh2 from "./Components/Services/Fresh2";
import Fresh3 from "./Components/Services/Fresh3";
import Fresh4 from "./Components/Services/Fresh4";
import Fresh5 from "./Components/Services/Fresh5";
import Footer from "../../Components/Footer/Footer"

const Services = () => {
  return (
    <div>
      <Navbar />
      <Service1 />
      <Fresh2/>
      <Fresh3/>
      <Fresh4/>
      <Fresh5/>
      <Footer/>
    </div>
  );
};

export default Services;
