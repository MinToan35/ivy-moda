import React from "react";

const Color = ({ color }) => {
  const backgroundImg = () => {
    if (color === "Kẻ nâu cà phê")
      return "https://pubcdn2.ivymoda.com/images/color/k46.png";
    if (color === "Họa tiết Xanh Tím Than")
      return "https://pubcdn2.ivymoda.com/images/color/h48.png";
    if (color === "Họa tiết Xanh Táo")
      return "https://pubcdn2.ivymoda.com/images/color/h07.png";
    if (color === "Xanh Bạc Hà")
      return "https://pubcdn2.ivymoda.com/images/color/018.png";
    if (color === "Đen")
      return "https://pubcdn2.ivymoda.com/images/color/049.png";
    if (color === "Xanh Ngọc")
      return "https://pubcdn2.ivymoda.com/images/color/035.png";
    if (color === "Kẻ Bạc")
      return "https://pubcdn2.ivymoda.com/images/color/k03.png";
    if (color === "Kẻ Xanh Tím Than")
      return "https://pubcdn2.ivymoda.com/images/color/k48.png";
    if (color === "Màu Be")
      return "https://pubcdn2.ivymoda.com/images/color/004.png";
    if (color === "Xanh Lam Sáng")
      return "https://pubcdn2.ivymoda.com/images/color/038.png";
    if (color === "Họa tiết Vàng Nghệ")
      return "https://pubcdn2.ivymoda.com/images/color/h11.png";
    if (color === "Họa tiết Nude")
      return "https://pubcdn2.ivymoda.com/images/color/h04.png";
    if (color === "Hồng san hô")
      return "https://pubcdn2.ivymoda.com/images/color/050.png";
    if (color === "Vàng hoa cúc")
      return "https://pubcdn2.ivymoda.com/images/color/009.png";
    if (color === "Trắng")
      return "https://pubcdn2.ivymoda.com/images/color/001.png";
  };
  return (
    <div
      style={{
        width: "18px",
        height: "18px",
        backgroundImage: `url(${backgroundImg()})`,
        backgroundSize: "contain",
        borderRadius: "50%",
      }}
    ></div>
  );
};

export default Color;
