import {Button} from "@mui/material";

const Homepage = () => {
  return (
    <div className="homepage-page-container">
      <div className="homepage-page-contents-container">
        <div className="homepage-page-introduction-container">
          <h1>
            Hello and welcome 👋🏼, I'm <span>Sulaimon Olaniran </span>
            An intermediate Frontend developer & Junior Backend developer
          </h1>
          <p>
            A talented and self-motivated FrontEnd Web Developer and BackEnd
            Developer with a good technical background, self-discipline,
            quick-learner, team-player with the ability to work with minimum or
            no supervision.
          </p>

          <Button variant="contained">Download Resume</Button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
