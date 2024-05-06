import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import img1 from "../../../../assets/sliderimage.png";
import img2 from "../../../../assets/sliderimage1.png";
import img3 from "../../../../assets/sliderimage2.png";
import img4 from "../../../../assets/sliderimage3.png";
import img5 from "../../../../assets/sliderimage4.png";
const Section8 = () => {

  let images = [img1 , img2 , img3 , img4 , img5]

  let settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll: 5,
  };
  return (
    <section className="section8">
      <Slider {...settings}>

{
  images.map((image)=>{
    return (
      <div key={image}>
        <img src={image} alt="" />
        </div>
    )
  })
}

        {/* <div>
          <img src={img1} alt="" />
        </div>
        <div>
        <img src={img2} alt="" />
        </div>
        <div>
        <img src={img3} alt="" />
        </div>
        <div>
        <img src={img4} alt="" />
        </div>
        <div>
        <img src={img5} alt="" />
        </div> */}
      </Slider>
    </section>
  );
};

export default Section8;
