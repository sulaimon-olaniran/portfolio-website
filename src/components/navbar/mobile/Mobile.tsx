import {useState} from "react";
import MobileMenuDrawer from "./drawer/Drawer";
import MenuButton from "./menu_button/MenuButton";
import Grow from "@mui/material/Grow";
import Slide from "@mui/material/Slide";

const NavbarMobileScreen = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(prev => !prev);
  };

  const closeDrawer = () => {
    setShowDrawer(false);
  };
  return (
    <div className="navbar-mobile-screen-container">
      <Slide direction="left" in={showDrawer} mountOnEnter unmountOnExit>
        <div className={`menu-overlay`} onClick={closeDrawer} />
      </Slide>
      <MobileMenuDrawer show={showDrawer} closeDrawer={closeDrawer} />
      <div className="name-logo">
        <span>Ş𝚞𝚕ⓐ𝔦𝚖𝚘𝚗-Ø𝚕𝚊𝚗𝔦𝚛ⓐ𝚗☯</span>
      </div>
      <MenuButton toggleDrawer={toggleDrawer} isToggled={showDrawer} />
    </div>
  );
};

export default NavbarMobileScreen;
