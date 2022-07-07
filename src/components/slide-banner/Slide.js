import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import data from "./data";
import { Link } from "react-router-dom";
import "./slide.scss";
import dataMobile from "./data-mobile";

const Slide = () => {
  const [dataImg, setDataImg] = useState(data);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const reLoad = () => {
    if (window.innerWidth <= 768) {
      setDataImg(dataMobile);
    } else {
      setDataImg(data);
    }
  };
  useEffect(() => {
    reLoad();
  }, []);
  return (
    <div className="slide">
      <Slider {...settings}>
        {dataImg.map((item) => {
          return (
            <Link key={item.id} className="slide-link" to={item.url}>
              <img className="img-slide" key={item.id} src={item.img} alt="" />
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};

export default Slide;
