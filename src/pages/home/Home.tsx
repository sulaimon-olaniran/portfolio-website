import {Button} from "@mui/material";

const Homepage = () => {
  return (
    <div className="homepage-page-container">
      <div className="background-image" />
      <div className="background-overlay" />
      <div className="homepage-page-contents-container">
        <div className="homepage-page-introduction-container">
          <h1>
            Hello and welcome 👋🏼, I'm <span>Sulaimon Olaniran </span>
            I'm a Frontend developer & Aspiring Backend developer
          </h1>
          <p>
            A talented and self-motivated Web Developer with a good technical
            background, self-discipline, quick-learner, and a team-player with
            the ability to work with minimum or no supervision. I'm currently
            open to frontend developer job role and also internship as a backend
            developer
          </p>
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
  );
};

export default Homepage;
