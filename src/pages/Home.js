import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";
import Slide from "../components/slide-banner/Slide";
const Home = () => {
  return (
    <div className="home-page container-custom">
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
    </div>
  );
};

export default Home;
