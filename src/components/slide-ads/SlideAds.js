import React from "react";
import Slider from "react-slick";
import data from "./data";
import { Link } from "react-router-dom";
import "./slideAds.scss";
const SlideAds = () => {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="slide-Ads">
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <Link to={item.url} key={item.id}>
              <img src={item.img} alt="" />
            </Link>
          );
        })}
      </Slider>
      <div className="underline"></div>
    </div>
  );
};

export default SlideAds;
