import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Muaz Aqdas </span>
            from <span className="purple">New Delhi, India.</span>
            <br />
            <br />
            I'm a <span className="purple">React Native developer</span> with <span className="purple">1+ years of professional experience</span> building cross-platform mobile applications. Currently working at <span className="purple">Gatoes</span>, where I lead mobile development and manage a team of 3 developers.
            <br />
            <br />
            I specialize in:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building production-grade React Native apps (iOS & Android)
            </li>
            <li className="about-activity">
              <ImPointRight /> End-to-end feature ownership from design to deployment
            </li>
            <li className="about-activity">
              <ImPointRight /> AI/LLM API integrations and intelligent features
            </li>
            <li className="about-activity">
              <ImPointRight /> Real-time systems with socket.io and push notifications
            </li>
            <li className="about-activity">
              <ImPointRight /> Performance optimization and scalable architecture
            </li>
          </ul>
          <p style={{ textAlign: "justify" }}>
            I've shipped multiple apps to the <span className="purple">App Store and Play Store</span> serving <span className="purple">500+ daily active users</span>, and I'm passionate about creating seamless mobile experiences with cutting-edge technologies.
            <br />
            <br />
          </p>
           {/* any quote of mine */}
          {/* <p style={{ color: "rgb(155 126 172)" }}>
            ""{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Muaz</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
