import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiMongodb, DiPython, DiMysql } from "react-icons/di";
import { SiPostgresql, SiMicrosoftexcel, SiPandas, SiNumpy, SiScipy, SiScikitlearn, SiFigma } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn /> {/* KNN, Matrice de Factorisation */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy /> {/* Réseaux Neurones */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /> {/* React.js */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> {/* JavaScript */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /> {/* Traitement du Langage Naturel (NLP) */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb /> {/* Base de données MongoDB */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql /> {/* Base de données MySQL */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql /> {/* Base de données PostgreSQL */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel /> {/* Excel pour les analyses de données */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas /> {/* Bibliothèque Pandas pour la manipulation de données */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScipy /> {/* Bibliothèque SciPy pour les calculs scientifiques */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma /> {/* UI/UX Design */}
      </Col>
    </Row>
  );
}

export default Techstack;
