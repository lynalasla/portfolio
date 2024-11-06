import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/logo2.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Bienvenue Dans Mon <span className="purple"> PORTFOLIO </span>
            </h1>
            <p className="home-about-body">
              Exploratrice de l'
              <b className="purple">intelligence artficielle</b> et fascinée par{" "}
              <b className="purple"> les données </b> et leurs differentes
              branches, je me passionne pour la transformation des données en
              solutions novatrices. Je vous invite à plonger dans mon univers,
              là où l'IA et les données prennent
              <b className="purple"> vie</b>!
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="logo2" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
