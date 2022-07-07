import { useState } from "react";
import { Link } from "react-router-dom";
import NavlinkItem from "./NavlinkItem";
const Navlink = ({ item }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <div className="nav-link-container">
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
      <ul className="submenu">
        {showMore &&
          item.subMenu &&
          item.subMenu.map((item) => {
            return (
              <li key={item.id}>
                <Link to={item.url}>{item.name}</Link>
              </li>
            );
          })}
      </ul>
      <ul>
        {showMore &&
          item.listSubMenu &&
          item.listSubMenu.map((item) => {
            return (
              <li key={item.id}>
                <NavlinkItem item={item} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Navlink;
