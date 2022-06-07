import "./styles/styles.scss";

import {Element} from "react-scroll";

import {
  AboutPage,
  BlogPage,
  ContactPage,
  Homepage,
  ProjectsPage,
  TechnologiesPage,
} from "./pages";
import {
  FooterrComponent,
  NavbarComponent,
  PageLoaderComponent,
} from "./components";

function App() {
  return (
    <div className="application-container">
      <PageLoaderComponent />
      <NavbarComponent />
      <div className="application-content-pages-container">
        <Element name="homepage" className="application-content-each-page">
          <Homepage />
        </Element>

        <Element name="about-page" className="application-content-each-page">
          <AboutPage />
        </Element>

        <Element name="techs-page" className="application-content-each-page">
          <TechnologiesPage />
        </Element>

        <Element name="projects-page" className="application-content-each-page">
          <ProjectsPage />
        </Element>

        <Element name="blog-page" className="application-content-each-page">
          <BlogPage />
        </Element>

        <Element name="contact-page" className="application-content-each-page">
          <ContactPage />
        </Element>
      </div>

      <FooterrComponent />
    </div>
  );
}

export default App;
