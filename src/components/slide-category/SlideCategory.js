import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import data from "./data";

import "./slideCategory.scss";

import Card from "./Card";

//filter category

const SlideCategory = () => {
  const category = [...new Set(data.map((item) => item.category))];
  const [value, setValue] = useState(0);
  const [products, setProducts] = useState(
    data.filter((item) => item.category === category[0])
  );
  const [slideToShow, setSlideToShow] = useState(5);
  const handlefilter = (category, index) => {
    const newProduct = data.filter((item) => item.category === category);
    setProducts(newProduct);
    setValue(index);
  };
  const reLoad = () => {
    if (window.innerWidth <= 768) {
      setSlideToShow(2);
      return;
    } else if (window.innerWidth <= 1200) {
      setSlideToShow(3);
      return;
    } else {
      setSlideToShow(5);
      return;
    }
  };
  useEffect(() => {
    reLoad();
    window.addEventListener("resize", reLoad);
  }, []);

  const settings = {
    infinite: false,
    slidesToShow: slideToShow,
    slidesToScroll: 1,
    draggable: false,
  };
  return (
    <div className="slide-category">
      <h2>new arrival</h2>
      <div className="btn-container">
        {category.map((item, index) => {
          return (
            <button
              className={`btn-category ${index === value ? "isActive" : ""}`}
              key={index}
              onClick={() => handlefilter(item, index)}
            >
              {item}
            </button>
          );
        })}
      </div>

      <Slider {...settings}>
        {products.map((item) => {
          return <Card key={item.id} item={item} className="card-product" />;
        })}
      </Slider>
    </div>
  );
};

export default SlideCategory;
