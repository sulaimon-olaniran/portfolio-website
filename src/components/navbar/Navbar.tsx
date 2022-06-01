import React, {useState, useEffect} from "react";

import NavbarDesktopScreen from "./desktop/Desktop";
import NavbarMobileScreen from "./mobile/Mobile";

interface componentProps {
  activeLink: string;
}
const NavbarComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = document.scrollingElement?.scrollTop;
      if (scrolled && scrolled >= 140) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, {passive: true});

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  return (
    <div
      className={`navbar-component-container ${
        isScrolled && "show-navbar-background"
      }`}
    >
      <div className="navbar-component-desktop-screen">
        <NavbarDesktopScreen />
      </div>

      <div className="navbar-component-mobile-screen">
        <NavbarMobileScreen />
      </div>
    </div>
  );
};

export default NavbarComponent;
