import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiVisualstudiocode,
  SiExpo,
  SiDocker,
  SiFirebase,
  SiReactquery,
} from "react-icons/si";
import { DiGit } from "react-icons/di";
import { SiApple, SiGoogleplay } from "react-icons/si";

function Toolstack() {
  const toolStack = [
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiExpo />, name: "Expo" },
    { icon: <SiReactquery />, name: "TanStack Query" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiApple />, name: "App Store" },
    { icon: <SiGoogleplay />, name: "Play Store" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolStack.map((tool, index) => (
        <Col xs={4} md={2} style={{justifyContent:'center'}} className="tech-icons" key={index}>
          <div className="" >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              {tool.icon}
            </div>
          </div>
          <p style={{ fontSize: "0.25em", marginTop: "10px", color: "#c770f0", fontWeight: "500", textAlign:'center' }}>
            {tool.name}
          </p>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
