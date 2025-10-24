import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a <b className="purple">React Native developer</b> with 1+ years of professional experience building cross-platform mobile applications.
              <br />
              <br />
              Currently at <b className="purple">Gatoes</b>, I lead mobile development and manage a team of 3 developers. I've built and deployed{" "}
              <i>
                <b className="purple">2 production apps in the App Store and Play Store</b>
              </i>{" "}
              serving <b className="purple">500+ daily active users</b>.
              <br />
              <br />
              My expertise includes &nbsp;
              <i>
                <b className="purple">React Native, TypeScript, Expo</b> and modern mobile technologies like{" "}
                <b className="purple">
                  real-time systems, payment integrations, and AI/LLM APIs.
                </b>
              </i>
              <br />
              <br />
              I'm passionate about building seamless mobile experiences and integrating
              <i>
                <b className="purple">
                  {" "}
                  cutting-edge AI features
                </b>
              </i>
              {" "}into production applications. I've built RAG-based chatbots with{" "}
              <i>
                <b className="purple">LLM integration</b>
              </i>{" "}
              and specialize in end-to-end feature ownership.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/muazaqdas"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/MuazAqdas2"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/muaz-aqdas-b1189a202/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/muazaqdas/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
