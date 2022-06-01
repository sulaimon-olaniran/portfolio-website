import React, {Fragment, useState} from "react";
import {Button} from "@mui/material";
import {Link} from "react-scroll";

const NavbarDesktopScreen: React.FunctionComponent = () => {
  const [transform, setTransform] = useState(0);
  const [activeLink, setActiveLink] = useState("home");

  const handleSetTransForm = (transform: number, activeLink: string): void => {
    setTransform(transform);
    setActiveLink(activeLink);
  };

  return (
    <div className="navbar-desktop-screen">
      <div className="name-logo">
        <span>Ş𝚞𝚕ⓐ𝔦𝚖𝚘𝚗-Ø𝚕𝚊𝚗𝔦𝚛ⓐ𝚗☯</span>
      </div>

      <div className="navbar-desktop-links-container">
        <div
          className="is-current-link-border"
          style={{transform: `translateX(${transform}%)`}}
        />

        <Link
          className={activeLink === "home" ? "nav-link-is-active" : ""}
          to="homepage"
          spy={true}
          smooth={true}
          onSetActive={() => handleSetTransForm(0, "home")}
        >
          <Button>Home</Button>
        </Link>

        <Link
          className={activeLink === "about" ? "nav-link-is-active" : ""}
          to="about-page"
          spy={true}
          smooth={true}
          onSetActive={() => handleSetTransForm(100, "about")}
          offset={-70}
        >
          <Button>About</Button>
        </Link>

        <Link
          className={activeLink === "techs" ? "nav-link-is-active" : ""}
          to="techs-page"
          spy={true}
          smooth={true}
          onSetActive={() => handleSetTransForm(200, "techs")}
          offset={-70}
        >
          <Button>Techs</Button>
        </Link>

        <Link
          className={activeLink === "projects" ? "nav-link-is-active" : ""}
          to="projects-page"
          spy={true}
          smooth={true}
          onSetActive={() => handleSetTransForm(300, "projects")}
          offset={-70}
        >
          <Button>Projects</Button>
        </Link>

        <Link
          className={activeLink === "blog" ? "nav-link-is-active" : ""}
          to="blog-page"
          spy={true}
          smooth={true}
          onSetActive={() => handleSetTransForm(400, "blog")}
          offset={-70}
        >
          <Button>Blog</Button>
        </Link>

        <Link
          className={activeLink === "contact" ? "nav-link-is-active" : ""}
          to="contact-page"
          spy={true}
          smooth={true}
          onSetActive={() => handleSetTransForm(500, "contact")}
          offset={-70}
        >
          <Button variant={activeLink === "contact" ? "contained" : "outlined"}>
            Contact
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NavbarDesktopScreen;
