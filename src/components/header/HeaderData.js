import dataWoman from "./woman/subMenu";
import listSubmenuWoman from "./woman/listSubmenu";
import dataMan from "./man/subMenu";
import listSubmenuMan from "./man/listSubmenu";
import dataChildren from "./children/subMenu";
import listSubmenuChildren from "./children/listSubmenu";
import dataAboutMe from "./aboutMe/subMenu";
import listSubmenuCollection from "./collection/listSubmenu";
const Navbar = [
  {
    id: 1,
    name: "Nữ",
    subMenu: dataWoman,
    listSubMenu: listSubmenuWoman,
  },
  {
    id: 2,
    name: "Nam",
    subMenu: dataMan,
    listSubMenu: listSubmenuMan,
  },
  {
    id: 3,
    name: "Trẻ em",
    subMenu: dataChildren,
    listSubMenu: listSubmenuChildren,
  },
  {
    id: 4,
    name: "Bộ sưu tập",
    listSubMenu: listSubmenuCollection,
  },
  {
    id: 5,
    name: "LIFESTYLE",
  },
  {
    id: 6,
    name: "Về Chúng Tôi",
    subMenu: dataAboutMe,
  },
];
export default Navbar;

export const icon = [
  {
    id: 1,
    name: "fa-solid fa-headphones",
  },
  {
    id: 2,
    name: "fa-solid fa-user",
  },
  {
    id: 3,
    name: "fa-solid fa-bag-shopping",
  },
];
