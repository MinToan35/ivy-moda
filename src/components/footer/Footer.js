import "./footer.scss";
import { Link } from "react-router-dom";
import logo, { social, left_center, main_center, right_center } from "./data";
import ReadMore from "./ReadMore";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container container">
          <div className="left-footer">
            <div className="top-left">
              {logo.map((item) => {
                return (
                  <Link to="/" key={item.id}>
                    <img src={item.img} alt="" />
                  </Link>
                );
              })}
            </div>
            <div className="content-left">
              <div className="info-left">
                <p>
                  Công ty Cổ phần Dự Kim với số đăng ký kinh doanh: 0105777650
                </p>
                <p>
                  <strong>Địa chỉ đăng ký: </strong>Tổ dân phố Tháp, P.Đại Mỗ,
                  Q.Nam Từ Liêm, TP.Hà Nội, Việt Nam
                </p>
                <p>
                  <strong>Số điện thoại: </strong>0243 205 2222
                </p>
              </div>
            </div>
            <ul className="list-social">
              {social.map((item) => {
                return (
                  <li key={item.id}>
                    <Link to={item.url} target="_blank">
                      <img src={item.img} alt="" />
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="hotline">
              <a href="tel:02466623434">Hotline: 0246 662 3434</a>
            </div>
          </div>
          <div className="center-footer">
            <div className="left-center">
              <p className="title-footer">Giới thiệu</p>
              <ul>
                {left_center.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link to="/">{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="main-center">
              <p className="title-footer">Dịch vụ khách hàng</p>
              <ul>
                {main_center.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link to="/">{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="right-center">
              <p className="title-footer">Liên hệ</p>
              <ul>
                {right_center.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link to="/">{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="right-footer">
            <div className="register-form">
              <p className="title-footer">
                Nhận thông tin các chương trình của IVY moda
              </p>
              <form className="form_subscribe">
                <input
                  className="email_subscribe"
                  type="text"
                  placeholder="Nhập địa chỉ email"
                  required="required"
                />
                <div className="btn-submit">
                  <button value="Đăng ký" type="submit">
                    Đăng ký
                  </button>
                </div>
              </form>
            </div>
            <div className="info-right">
              <p className="title-footer">Download App</p>
              <ul>
                <li>
                  <Link
                    className="link-white"
                    to="http://ios.ivy.vn"
                    target="_blank"
                    title="Tải App IVYmoda trên App Store"
                  >
                    {" "}
                    <img
                      src="https://pubcdn2.ivymoda.com/images/appstore.png"
                      alt=""
                    />{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="http://android.ivy.vn"
                    className="link-white"
                    target="_blank"
                    title="Tải App IVYmoda trên Google Play"
                  >
                    {" "}
                    <img
                      src="https://pubcdn2.ivymoda.com/images/googleplay.png"
                      alt=""
                    />{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-tablet">
        <div className="foot-container container">
          <div className="info-top">
            <p className="title-footer">Download App</p>
            <ul>
              <li>
                <Link
                  to="http://ios.ivy.vn"
                  target="_blank"
                  title="Tải App IVYmoda trên App Store"
                >
                  {" "}
                  <img
                    src="https://pubcdn2.ivymoda.com/images/appstore.png"
                    width="140"
                    alt=""
                  />{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="http://android.ivy.vn"
                  target="_blank"
                  title="Tải App IVYmoda trên Google Play"
                >
                  {" "}
                  <img
                    src="https://pubcdn2.ivymoda.com/images/googleplay.png"
                    width="140"
                    alt=""
                  />{" "}
                </Link>
              </li>
            </ul>
          </div>
          <div className="info-center">
            <ReadMore name="Giới thiệu" data={left_center} />
            <ReadMore name="Dịch vụ khách hàng" data={main_center} />
            <ReadMore name="Liên hệ" data={right_center} />
          </div>
          <div className="register-form">
            <p className="title-footer">
              Nhận thông tin các chương trình của IVY moda
            </p>
            <form className="form_subscribe">
              <input
                type="text"
                name="email"
                placeholder="Nhập địa chỉ email của bạn"
                required="required"
              />
              <div className="btn-submit">
                <button type="submit">Đăng ký</button>
              </div>
            </form>
          </div>
          <div className="info-bottom">
            <ul className="list-social">
              {social.map((item) => {
                return (
                  <li key={item.id}>
                    <Link to={item.url} target="_blank">
                      <img src={item.img} alt="" />
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="hotline">
              <a href="tel:02466623434">Hotline: 0246 662 3434</a>
            </div>
            <div className="logo-bottom">
              {logo.map((item) => {
                return (
                  <Link to="/" key={item.id}>
                    <img src={item.img} alt="" />
                  </Link>
                );
              })}
            </div>
            <p>Công ty Cổ phần Dự Kim với số đăng ký kinh doanh: 0105777650</p>
            <p>
              <strong>Địa chỉ đăng ký: </strong>Tổ dân phố Tháp, P.Đại Mỗ, Q.Nam
              Từ Liêm, TP.Hà Nội, Việt Nam
            </p>
            <p>
              <strong>Số điện thoại: </strong>0243 205 2222
            </p>
          </div>
        </div>
      </div>
      <div className="copy-right">©IVYmoda All rights reserved</div>
    </>
  );
};

export default Footer;
