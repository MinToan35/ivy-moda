import { useState } from "react";

import Slider from "react-slick";
import data from "./data";

import "./slideCategory.scss";

import Card from "./Card";

//filter category

const SlideCategory = ({ slidesToShow }) => {
  const category = [...new Set(data.map((item) => item.category))];
  const [value, setValue] = useState(0);
  const [products, setProducts] = useState(
    data.filter((item) => item.category === category[0])
  );
  const handlefilter = (category, index) => {
    const newProduct = data.filter((item) => item.category === category);
    setProducts(newProduct);
    setValue(index);
  };

  const settings = {
    infinite: false,
    slidesToShow: slidesToShow,
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
