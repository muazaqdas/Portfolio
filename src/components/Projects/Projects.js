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
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
