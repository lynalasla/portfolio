import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.jpg";
import Toolstack from "./Toolstack";
import { FaLinkedinIn } from "react-icons/fa";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1
              style={{
                fontSize: "2.1em",
                paddingBottom: "20px",
                marginTop: "20px",
              }}
            >
              QUI SUIS-JE ?
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{
              paddingTop: "120px",
              paddingBottom: "50px",
              borderRadius: "50%",
            }}
            className="about-img"
          >
            <img
              src={laptopImg}
              alt="about"
              className="img-fluid"
              style={{ marginTop: "0.1px" }}
            />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONTACTEZ-MOI</h1>
            <p>
              trouvez-moi sur mon profil <b className="purple">LinkedIn</b>{" "}
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://dz.linkedin.com/in/lyna-lasla-53679b2aa"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <h1 className="project-heading">
          Mes<strong className="purple"> Compétences </strong>Profesionnelles
        </h1>

        <Techstack />

        <h1 className="project-heading">
          Les<strong className="purple"> Outils</strong> que j'utilise
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
