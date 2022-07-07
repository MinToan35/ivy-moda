import { useState } from "react";
import { Link } from "react-router-dom";
const NavlinkItem = ({ item }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <div className="nav-link-item">
        <Link className="nav-link" to="/">
          {item.name}
        </Link>
        <button className="btn-showMore" onClick={() => setShowMore(!showMore)}>
          {showMore ? (
            <i className="fa-solid fa-minus"></i>
          ) : (
            <i className="fa-solid fa-plus"></i>
          )}
        </button>
      </div>
      <ul className="list-link-items">
        {showMore &&
          item.list.map((item) => {
            return (
              <li key={item.id}>
                <Link className="nav-link" to={item.url}>
                  {item.item}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default NavlinkItem;
