import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiExpo,
  SiTypescript,
  SiSocketdotio,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

function Techstack() {
  const techStack = [
    { icon: <TbBrandReactNative />, name: "React Native" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <DiReact />, name: "React" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <SiExpo />, name: "Expo" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <SiSocketdotio />, name: "Socket.io" },
    { icon: <DiGit />, name: "Git" },
    { icon: <DiPython />, name: "Python" },
    { icon: <DiMongodb />, name: "MongoDB" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStack.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {tech.icon}
            <p style={{ fontSize: "0.25em", marginTop: "10px", color: "#c770f0", fontWeight: "500" }}>
              {tech.name}
            </p>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
