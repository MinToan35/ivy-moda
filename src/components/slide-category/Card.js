import { useState } from "react";
import { Link } from "react-router-dom";
import Color from "../color/Color";
import currencyFormatter from "../format/format";
const Card = ({ item }) => {
  const [like, setLike] = useState(false);
  const handleLike = () => {
    setLike(!like);
  };

  return (
    <div className="detail-link" to="/">
      <Link to="/" className="img-content">
        <img className="img-product" src={item.img} alt={item.name} />
        <img className="img-hover" src={item.imgHover} alt={item.name} />
      </Link>
      <div className="info">
        <div className="info-header">
          <div className="color-container">
            <Color color={item.color} />
          </div>
          <button onClick={handleLike}>
            {like ? (
              <i className="fa-solid fa-heart"></i>
            ) : (
              <i className="fa-regular fa-heart"></i>
            )}
          </button>
        </div>
        <Link className="name-product" to={`/sanpham/${item.name}`}>
          {item.name}
        </Link>
        <div className="info-footer">
          <h3>{currencyFormatter.format(item.price)}</h3>
          <button className="add-to-bag">
            <i className="fa-solid fa-bag-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
