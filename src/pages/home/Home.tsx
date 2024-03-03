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
            I'm a Full-Stack developer
          </h1>
          <p>
            A talented and self-motivated Web Developer with a good technical
            background, self-discipline, quick-learner, and a team-player with
            the ability to work with minimum or no supervision. I'm currently
            open to frontend developer job role and also mid-level roles as a
            backend developer
          </p>

          <a
            href="https://drive.google.com/file/d/1TkTDaDhaLFxrGS4JHrAn4b5wkrP54xda/view?usp=sharing"
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
