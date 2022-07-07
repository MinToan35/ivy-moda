import { useRef } from "react";
import data, { icon } from "./HeaderData";
import { Link } from "react-router-dom";
import "./header.scss";
import Navlink from "./Navlink";

const Header = () => {
  const sidebarRef = useRef();

  const handleOpen = () => {
    sidebarRef.current.style.transform = "translateX(0%)";
  };
  const handleClose = () => {
    sidebarRef.current.style.transform = "translateX(-100vw)";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="navbar-container">
      <nav className="navbar container">
        <ul className="nav-list">
          {data.map(({ id, name, subMenu, listSubMenu }) => {
            return (
              <li key={id} className="nav-item">
                {name === "LIFESTYLE" ? (
                  <Link className="nav-link" to="/tin-tuc/tin-chinh">
                    {name}
                  </Link>
                ) : (
                  <>
                    <Link className="nav-link" to="/">
                      {name}
                    </Link>
                    <ul className="nav-link-item">
                      <div className="left-submenu">
                        {subMenu &&
                          subMenu.map((item) => {
                            return (
                              <li key={item.id}>
                                <Link to={item.url}>{item.name}</Link>
                              </li>
                            );
                          })}
                      </div>

                      <div className="list-submenu ">
                        {listSubMenu &&
                          listSubMenu.map(({ id, name, list }) => {
                            return (
                              <div key={id} className="list-submenu-items">
                                <h3>{name}</h3>
                                <ul>
                                  {list.map(({ id, item, url }) => {
                                    return (
                                      <li
                                        key={id}
                                        className="list-submenu-item"
                                      >
                                        <Link to={url}>{item}</Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            );
                          })}
                      </div>
                    </ul>
                  </>
                )}
              </li>
            );
          })}
        </ul>
        <button className="toggle-bars" onClick={handleOpen}>
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="sidebar" ref={sidebarRef}>
          <button className="close-submenu" onClick={handleClose}>
            <i className="fa-solid fa-times"></i>
          </button>
          <Link className="login" to="/customer/login">
            Đăng nhập
          </Link>
          <ul>
            {data.map((item) => {
              return (
                <li key={item.id}>
                  {item.name === "LIFESTYLE" ? (
                    <Link className="nav-link" to="/tin-tuc/tin-chinh">
                      {item.name}
                    </Link>
                  ) : (
                    <Navlink item={item} />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <img src="https://pubcdn2.ivymoda.com/images/logo.png" alt="logo" />
        <div className="right-header">
          <form className="search" onSubmit={handleSubmit}>
            <input type="text" placeholder="TÌM KIẾM SẢN PHẨM" />
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
          {icon.map((item) => {
            return <i className={`icon ${item.name}`} key={item.id} />;
          })}
        </div>
      </nav>
      <div className="nav-mobile-bottom">
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <span>Tìm kiếm</span>
        </div>

        <Link to="/customer/login" className="login">
          <i className="fa-solid fa-user"></i>
          <span>Đăng nhập</span>
        </Link>
        <div className="help">
          <i className="fa-solid fa-headphones"></i>
          <span>Trợ giúp</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
