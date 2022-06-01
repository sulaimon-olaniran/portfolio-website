import {Avatar, Button} from "@mui/material";

const AboutPage = () => {
  return (
    <div className="about-page-container">
      <div className="about-page-inner-container">
        <div className="about-page-background-image-container" />
        <div className="about-page-contents-container">
          <div className="about-page-contents-header-container">
            <h1>
              About <span>Me</span>
            </h1>
          </div>

          <div className="about-page-contents-avatar-container">
            <Avatar src="https://freesvg.org/img/1547510251.png" />
          </div>

          <div className="about-page-contents-paragraphs-container">
            <p>
              I specialize in building web and mobile interfaces that are
              elegant, intuitiveand which effectively communicates to its
              intended users using modern web and mobile technologies.
            </p>

            <p>
              I am capable of playing a key front-end and mobile engineering
              roles with intermediate knowledge of core front-end and mobile
              technologies, frameworks, and libraries. I deliver pixel-perfect
              UIs while ensuring maximum accessibility, user-friendliness, and
              usability.
            </p>
          </div>

          <div>
            <Button variant="contained">Download Resume</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
