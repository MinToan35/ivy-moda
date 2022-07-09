import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";
import Slide from "../components/slide-banner/Slide";
import SlideCategory from "../components/slide-category/SlideCategory";
const Home = () => {
  return (
    <div className="home-page container">
      <div className="home-info">
        <Link className="info-link" to="/danh-muc/hang-nu-moi-ve">
          Free Shipping đơn hàng nguyên giá
        </Link>
        <Link className="info-link" to="/about/chinh-sach-bao-hanh">
          Bảo hành trọn đời
        </Link>
        <Link className="info-link" to="/about/chinh-sach-the-thanh-vien">
          Chính sách thẻ thành viên
        </Link>
      </div>
      <Slide />
      <SlideCategory />
      <Link to="/danh-muc/hang-nu-moi-ve">
        <button className="see-more">Xem tất cả</button>
      </Link>
    </div>
  );
};

export default Home;
