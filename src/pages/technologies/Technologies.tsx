import technologies from "../../assets/jsons/technologies.json";

const TechnologiesPage = () => {
  return (
    <div className="technologies-page-container">
      <div className="overlay-background-image" />
      <div className="overlay-background-color" />
      <div className="technologies-page-inner-container">
        <div className="technologies-page-header-container">
          <h1>
            <span>Technologies </span>I Use
          </h1>
        </div>

        <div className="technologies-page-contents-container">
          {technologies.map((tech: {name: string; image: string}) => {
            return (
              <div key={tech.name} className="each-technology-container">
                <div className="each-tech-overlay" />
                <div className="technology-image-container">
                  <img src={tech.image} />
                </div>
                <p>{tech.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechnologiesPage;
