import {Button} from "@mui/material";
import Slide from "@mui/material/Slide";
import {Link} from "react-scroll";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";

interface componentProps {
  show: boolean;
  closeDrawer: () => void;
}

const MobileMenuDrawer = ({show, closeDrawer}: componentProps) => {
  const handleCloseDrawer = (): void => {
    setTimeout(() => {
      closeDrawer();
    }, 500);
  };
  return (
    <Slide direction="right" in={show} mountOnEnter unmountOnExit>
      <div className="mobile-menu-drawer-container">
        <div className="name-logo">
          <span>Ş𝚞𝚕ⓐ𝔦𝚖𝚘𝚗-Ø𝚕𝚊𝚗𝔦𝚛ⓐ𝚗☯</span>
        </div>

        <div className="mobile-menu-drawer-links-container">
          <Link
            activeClass={"nav-link-is-active"}
            to="homepage"
            spy={true}
            smooth={true}
          >
            <Button>
              <HomeOutlinedIcon />
              Home
            </Button>
          </Link>

          <Link
            activeClass={"nav-link-is-active"}
            to="about-page"
            spy={true}
            smooth={true}
          >
            <Button>
              <InfoOutlinedIcon />
              About
            </Button>
          </Link>

          <Link
            activeClass={"nav-link-is-active"}
            to="techs-page"
            spy={true}
            smooth={true}
          >
            <Button>
              <ComputerOutlinedIcon />
              Technologies
            </Button>
          </Link>

          <Link
            activeClass={"nav-link-is-active"}
            to="projects-page"
            spy={true}
            smooth={true}
          >
            <Button>
              <AccountTreeOutlinedIcon />
              Projects
            </Button>
          </Link>

          <Link
            activeClass={"nav-link-is-active"}
            to="blog-page"
            spy={true}
            smooth={true}
          >
            <Button>
              <ArticleOutlinedIcon />
              Blog
            </Button>
          </Link>

          <Link
            activeClass={"nav-link-is-active"}
            to="contact-page"
            spy={true}
            smooth={true}
          >
            <Button>
              <ContactPageOutlinedIcon />
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </Slide>
  );
};

export default MobileMenuDrawer;
