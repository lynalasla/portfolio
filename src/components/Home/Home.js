import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.jpg";
import Home2 from "./Home2";
import Type from "./Type";
import About from "../About/About.js";
import Projects from "../Projects/Projects.js";
import Resume from "../Resume/ResumeNew.js";

function Home() {
  return (
    <div>
      <section id="home">
        <Container fluid className="home-section">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 className="heading" style={{ paddingBottom: 15 }}>
                  <span className="wave" role="img" aria-label="wave">
                    Bonjour!
                  </span>
                </h1>
                <h1 className="heading-name">
                  Je suis <strong className="main-name">LASLA LYNA</strong>
                </h1>
                <div
                  className="type-container"
                  style={{ padding: 50, textAlign: "left" }}
                >
                  <Type />
                </div>
              </Col>
              <Col
                md={5}
                className="home-image-col"
                style={{ paddingBottom: 20 }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "451px",
                    height: "451px",
                    borderRadius: "48%",
                    backgroundColor: "#021E2E",
                    padding: "0px",
                    boxShadow: "0 10px 50px rgba(255, 102, 196, 1)",
                    position: "relative",
                    marginTop: "-10px",
                  }}
                >
                   <img
                    src={homeLogo}
                    alt="Lasla Lyna"
                    style={{
                      width: "500px",
                      height: "500px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        <section id="home2"></section>
        <Home2 />
      </section>

      <section id="about"></section>
      <About />
      <section id="projects"></section>
      <Projects />
      <section id="resume"></section>
      <Resume />
    </div>
  );
}

export default Home;
