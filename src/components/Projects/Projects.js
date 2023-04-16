import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

const projects = [
  {
    imgPath: "/Assets/Projects/emara.png",
    title: "EMARA",
    description:
      "Recently completed a freelance project utilizing Next.js, React.js, Bootstrap CSS, and Hygraph to build a multipage responsive portfolio website showcasing various projects for the client. Worked closely with the client to understand their requirements and implemented modern web development technologies and best practices to create a visually appealing and user-friendly website. Ensured seamless performance across different devices and screen sizes, and incorporated responsive design principles to optimize the user experience. Grateful for the opportunity to contribute to the client's online presence and help them showcase their projects in a professional and engaging manner.",
    // ghLink=""
    demoLink: "https://emara.vercel.app/",
  },
  {
    imgPath: "/Assets/Projects/n0c.png",
    title: "n0c",
    description:
      "Completed a freelance project using React.js, Bootstrap, and custom CSS to create a landing website for a client's portfolio. Collaborated closely to deliver a modern, visually appealing, and responsive website that effectively showcases their work. Utilized industry-standard technologies and best practices to ensure seamless user experience.",
    // ghLink=""
    demoLink: "https://n0c.netlify.app/",
  },
  {
    imgPath: "/Assets/Projects/careerfly.png",
    title: "Careerfly",
    description:
      "Led the development of an innovative Ed-Tech website as a Senior Web Developer at HITGOC. Collaborated with a skilled team to create a clean and responsive user interface that enables seamless enrollment in a diverse range of courses. Implemented cutting-edge web technologies to deliver an intuitive and engaging user experience, ensuring optimal performance across multiple devices. Resulted in an enhanced online learning platform that empowers students to access high-quality educational resources and achieve their learning goals.",
    // ghLink=""
    demoLink: "https://careerfly.in/",
  },
  {
    imgPath: "/Assets/Projects/NoteKeeper.png",
    title: "Note Keeper App",
    description:
      "Designed and developed an easy to use notes keeping app. Managed state using react hooks to easily write notes. Add & delete notes easily, just by clicking a button.",
    ghLink: "https://github.com/muazaqdas/note-keeper-app/",
    demoLink: "http://note-keepers.netlify.app/",
  },
  {
    imgPath: "/Assets/Projects/AgriZone1.png",
    title: "AgriZone",
    description:
      "An agricultural product selling website build with React.js & Bootstrap.",
    ghLink: "https://github.com/muazaqdas/AgriZone",
    demoLink: "https://agrizone.netlify.com/",
  },
  {
    imgPath:  "/Assets/Projects/FitnessApp.png" ,
    title: "Fitness App:Dashboard",
    description:
      "Created an interactive dashboard for a fitness app using Bootstrap & React.Js. Fetching user data (example: user id, name, email) from a json object and displaying it on the dashboard. Added circular-progress-bars and routes for workout & nutrition page for each user.",
    ghLink: "https://github.com/muazaqdas/Fitness-App-Dashboard",
    demoLink: "https://fitness-app-dashboard.netlify.app/",
  },
];

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
          {projects.map((item, index) => {
            return (
              <Col md={4} className="project-card" key={index}>
                <ProjectCard
                  imgPath={item.imgPath}
                  title={item.title}
                  description={item.description}
                  ghLink={item?.ghLink}
                  demoLink={item.demoLink}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
