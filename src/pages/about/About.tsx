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
              I specialize in building web applications that are elegant,
              intuitive, responsive around all screen sizes, and which
              effectively communicates to its intended users using modern web
              technologies.
            </p>

            <p>
              I am capable of playing a key front-end role with intermediate
              knowledge of core front-end languages, frameworks, and libraries.
              I deliver pixel-perfect user's interfaces while ensuring maximum
              accessibility, user-friendliness, and usability.
            </p>

            <p>
              I'm also passionate about Back-end development and have a
              beginner's knowledge of Node.JS(Express), MongoDB and Firebase.
              I'm a quick learner with a willingness to learn new skills and
              improve my current skills.
            </p>
          </div>

          <div className="about-page-button-container">
            <a
              href=" https://drive.google.com/file/d/1JNAC8ar_HEhhK4COwya4HGOSiMJZ9h0b/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="contained">View Resume</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
