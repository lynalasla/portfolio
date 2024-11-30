import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiPython,
  DiMysql,
} from "react-icons/di";
import {
  SiPostgresql,
  SiMicrosoftexcel,
  SiPandas,
  SiNumpy,
  SiScipy,
  SiScikitlearn,
  SiFigma,
} from "react-icons/si";

function Techstack() {
  const [tooltip, setTooltip] = useState("");

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        onMouseEnter={() => setTooltip("KNN, Matrice de Factorisation")}
        onMouseLeave={() => setTooltip("")}
      >
        <SiScikitlearn />
        {tooltip && <div style={tooltipStyle}>{tooltip}</div>}
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        onMouseEnter={() => setTooltip("Réseaux Neurones")}
        onMouseLeave={() => setTooltip("")}
      >
        <SiNumpy />
        {tooltip && <div style={tooltipStyle}>{tooltip}</div>}
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        onMouseEnter={() => setTooltip("React.js")}
        onMouseLeave={() => setTooltip("")}
      >
        <DiReact />
        {tooltip && <div style={tooltipStyle}>{tooltip}</div>}
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        onMouseEnter={() => setTooltip("JavaScript")}
        onMouseLeave={() => setTooltip("")}
      >
        <DiJavascript1 />
        {tooltip && <div style={tooltipStyle}>{tooltip}</div>}
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        onMouseEnter={() => setTooltip("Traitement du Langage Naturel (NLP)")}
        onMouseLeave={() => setTooltip("")}
      >
        <DiPython />
        {tooltip && <div style={tooltipStyle}>{tooltip}</div>}
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        onMouseEnter={() => setTooltip("Base de données MongoDB")}
        onMouseLeave={() => setTooltip("")}
      >
        <DiMongodb />
        {tooltip && <div style={tooltipStyle}>{tooltip}</div>}
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        onMouseEnter={() => setTooltip("Base de données MySQL")}
        onMouseLeave={() => setTooltip("")}
      >
        <DiMysql />
        {tooltip && <div style={tooltipStyle}>{tooltip}</div>}
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        onMouseEnter={() => setTooltip("Base de données PostgreSQL")}
        onMouseLeave={() => setTooltip("")}
      >
        <SiPostgresql />
        {tooltip && <div style={tooltipStyle}>{tooltip}</div>}
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        onMouseEnter={() => setTooltip("Excel pour les analyses de données")}
        onMouseLeave={() => setTooltip("")}
      >
        <SiMicrosoftexcel />
        {tooltip && <div style={tooltipStyle}>{tooltip}</div>}
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        onMouseEnter={() => setTooltip("Bibliothèque Pandas")}
        onMouseLeave={() => setTooltip("")}
      >
        <SiPandas />
        {tooltip && <div style={tooltipStyle}>{tooltip}</div>}
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        onMouseEnter={() => setTooltip("Bibliothèque SciPy")}
        onMouseLeave={() => setTooltip("")}
      >
        <SiScipy />
        {tooltip && <div style={tooltipStyle}>{tooltip}</div>}
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        onMouseEnter={() => setTooltip("UI/UX Design")}
        onMouseLeave={() => setTooltip("")}
      >
        <SiFigma />
        {tooltip && <div style={tooltipStyle}>{tooltip}</div>}
      </Col>
    </Row>
  );
}

const tooltipStyle = {
  position: "absolute",
  bottom: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: "#333",
  color: "white",
  padding: "5px 10px",
  borderRadius: "5px",
  fontSize: "12px",
};

export default Techstack;
