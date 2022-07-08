const data = [
  {
    id: 1,
    category: "IVY moda",
    name: "Đầm Họa Tiết Kẻ Vai Cut-Out",
    price: 1690000,
    color: "Kẻ nâu cà phê",
    img: "https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/05/32821d59975527e8ba1949d80f70be27.jpg",
    imgHover:
      "https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/05/2a6359d9e3d1cb8356653e2dc3bf50bd.jpg",
  },
  {
    id: 2,
    category: "IVY moda",
    name: "Đầm Lụa Lệch Vai",
    price: 1890000,
    color: "Họa tiết Xanh Tím Than",
    img: "https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/05/9024af8b27732e3c4e53d21ef12e68de.jpg",
    imgHover:
      "https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/05/8481196b56b580c727b2ced5c4a3ce83.jpg",
  },
  {
    id: 3,
    category: "IVY men",
    name: "Áo Thun In Hình",
    price: 650000,
    color: "Xanh Ngọc",
    img: "https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/05/27/1b751da0513d24200158440a2f9513b4.JPG",
    imgHover:
      "https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/05/27/ef22fd275680e9334607693479e22c8e.JPG",
  },
  {
    id: 4,
    category: "IVY kids",
    name: "Áo Sơ Mi Bé Trai",
    price: 399000,
    color: "Họa tiết Vàng Nghệ",
    img: "https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/06/06/46c1203ba263bf937598d8e049dab8d1.jpg",
    imgHover:
      "https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/06/06/23de06610140d0254fb8979e063d40a0.jpg",
  },
  {
    id: 5,
    category: "IVY men",
    name: "Áo Polo Cổ Tàu Trụ",
    price: 690000,
    color: "Kẻ Bạc",
    img: "https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/05/27/224f8c4345bdc6a98cb642f2ff397ec9.JPG",
    imgHover:
      "https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/05/27/95f2bad607ae78524f68461b19c648f5.JPG",
  },
  {
    id: 6,
    category: "IVY men",
    name: "Áo Polo Cổ Tàu Trụ",
    price: 690000,
    color: "Kẻ Xanh Tím Than",
    img: "https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/05/27/98994e56421998cccbcf0ba654c2a266.JPG",
    imgHover:
      "https://pubcdn.ivymoda.com/files/product/thumab/400/2022/05/27/7203369bdd02e8e406b04b5a9811bf54.JPG",
  },
  {
    id: 7,
    category: "IVY moda",
    name: "Đầm Hoa Tay Hến",
    price: 1690000,
    color: "Họa tiết Xanh Táo",
    img: "https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/07/05/c6b63213c7ea89b2445ce581188ca798.jpg",
    imgHover:
      "https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/05/9f021792cea14e0b3fb78b2a5fb25201.jpg",
  },
  {
    id: 8,
    category: "IVY kids",
    name: "Set Áo 2 Dây Và Quần Phối Bèo",
    price: 755000,
    color: "Họa tiết Nude",
    img: "https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/07/01/4732db4a407913217b4f3bd049989c91.JPG",
    imgHover:
      "https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/07/01/74681f507720e08a2f967d86a9f7430d.JPG",
  },
  {
    id: 9,
    category: "IVY kids",
    name: "Chân Váy Công Chúa",
    price: 599000,
    color: "Hồng san hô",
    img: "https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/07/01/1354fcc34195c3ed53a67a5f23861ee8.JPG",
    imgHover:
      "https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/07/01/b3907b5a9451d966500f9424287348e6.JPG",
  },
  {
    id: 10,
    category: "IVY moda",
    name: "Đầm Lụa Phối Bèo",
    price: 1990000,
    color: "Xanh Bạc Hà",
    img: "https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/06/28/9724725ffc088b6920dbbe20200e6b92.JPG",
    imgHover:
      "https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/06/28/184ec1d516ac74a8d731103d2211ee06.JPG",
  },
  {
    id: 11,
    category: "IVY moda",
    name: "Đầm Lụa Phối Bèo",
    price: 1990000,
    color: "Đen",
    img: "https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/06/28/a7c1f10e380ed4f28c4bc5ee452e30e5.JPG",
    imgHover:
      "https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/06/28/b549a9a647613a6ce98f0060ed440772.JPG",
  },
  {
    id: 12,
    category: "IVY men",
    name: "Áo Thun Phối Túi Hộp",
    price: 690000,
    color: "Màu Be",
    img: "https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/05/27/cb93235d27ec08e0ff2801a92f80d47c.JPG",
    imgHover:
      "https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/05/27/43e14d4385dbbc1c87bbfeacd6000326.JPG",
  },
  {
    id: 13,
    category: "IVY men",
    name: "Áo Thun Phối Túi Hộp",
    price: 690000,
    color: "Xanh Lam Sáng",
    img: "https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/05/27/d79001635b2af011e4e8dc5f88651eab.JPG",
    imgHover:
      "https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/05/27/e25c4940a7d14cc88c7737ffceed32ad.JPG",
  },
  {
    id: 14,
    category: "IVY kids",
    name: "Set Áo 2 Dây Và Quần Phối Bèo",
    price: 755000,
    color: "Vàng hoa cúc",
    img: "https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/07/01/567e4ab5a2183c326366da40b617cae8.JPG",
    imgHover:
      "https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/07/01/62d0ee476c33530e422219bdb96880f1.JPG",
  },
  {
    id: 15,
    category: "IVY kids",
    name: "Áo sơ mi bé trai",
    price: 599000,
    color: "Trắng",
    img: "https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/06/29/5f9052094ba7411994c7eff346a7761d.JPG",
    imgHover:
      "https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/06/29/43fafdd3c36c7adc8844a399d9d8243c.JPG",
  },
];

export default data;
