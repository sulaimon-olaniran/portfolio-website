import {Button} from "@mui/material";

import {projects} from "../../assets/data/top_projects";

const ProjectsPage = () => {
  return (
    <div className="projects-page-container">
      <div className="projects-page-inner-container">
        <div className="projects-page-header-container">
          <h1>
            My <span>Projects</span>
          </h1>
        </div>
        <div className="top-projects-container">
          {projects.map(project => {
            return (
              <div className="each-top-project-container">
                <div
                  className="project-preview-image"
                  style={{
                    backgroundImage: `url(${project.image})`,
                  }}
                />

                <div className="preject-details-container">
                  <div className="project-details-contents-container">
                    <div className="details-top-section">
                      <h1>{project.name}</h1>

                      <div className="project-details-description-container">
                        <p>{project.description}</p>
                      </div>
                    </div>

                    <div className="details-bottom-section">
                      <div className="project-details-techs-list-container">
                        {project.techs.map(tech => {
                          return <span>{tech}</span>;
                        })}
                      </div>

                      <div className="project-details-links-container">
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            color="primary"
                            variant="contained"
                            disabled={!project.repo}
                          >
                            GitHub
                          </Button>
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button color="primary" variant="contained">
                            Demo
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProjectsPage;
