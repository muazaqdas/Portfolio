import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import suicide from "../../Assets/Projects/suicide.png";
import agrizone from "../../Assets/Projects/AgriZone1.png";
import emara from "../../Assets/Projects/Emara1.png";
import note from "../../Assets/Projects/NoteKeeper1.png";
import fitness from "../../Assets/Projects/FitnessApp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agrizone}
              title="AgriZone"
              description="An agricultural product selling website build with React.js & Bootstrap."
              ghLink="https://github.com/muazaqdas/AgriZone"
              demoLink="https://agrizone.netlify.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emara}
              title="EMARA"
              description="A freelance project build with React.js and Bootstrap Css, showcasing client's various projects. A multipage portfolio website with image carousel."
              // ghLink=""
              demoLink="https://emara.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={note}
              title="Note Keeper App"
              description="Designed and developed an easy to use notes keeping app. Managed state using react hooks to easily write notes. Add & delete notes easily, just by clicking a button."
              ghLink="https://github.com/muazaqdas/note-keeper-app/"
              demoLink="http://note-keepers.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitness}
              title="Fitness App:Dashboard"
              description="Created an interactive dashboard for a fitness app using Bootstrap & React.Js. Fetching user data (example: user id, name, email) from a json object and displaying it on the dashboard. Added circular-progress-bars and routes for workout & nutrition page for each user."
              ghLink="https://github.com/muazaqdas/Fitness-App-Dashboard"
              demoLink="https://fitness-app-dashboard.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
