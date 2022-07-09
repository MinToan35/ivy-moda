import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.scss";
import Slide from "../components/slide-banner/Slide";
import SlideCategory from "../components/slide-category/SlideCategory";
import Trending from "../components/trending/Trending";
import SlideAds from "../components/slide-ads/SlideAds";
import Gallery from "../components/gallery/Gallery";
const Home = () => {
  const [slideToShow, setSlideToShow] = useState(5);
  const reLoad = () => {
    if (window.innerWidth <= 998) {
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
      <SlideCategory slidesToShow={slideToShow} />
      <Link to="/danh-muc/hang-nu-moi-ve">
        <button className="see-more">Xem tất cả</button>
      </Link>
      <Trending />
      <SlideAds />
      <Gallery slidesToShow={slideToShow} />
    </div>
  );
};

export default Home;
