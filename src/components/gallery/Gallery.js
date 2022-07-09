import { Link } from "react-router-dom";
import data from "./data";
import "./gallery.scss";
import Slider from "react-slick";
const Gallery = ({ slidesToShow }) => {
  const settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };
  return (
    <div className="gallery">
      <h3>gallery</h3>
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <Link to="/" key={item.id} className="gallery-link">
              <img src={item.img} alt="" />
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};

export default Gallery;
