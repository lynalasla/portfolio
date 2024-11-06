import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiJupyter, // Jupyter Notebook
  SiAnaconda, // Anaconda
  SiTensorflow, // TensorFlow
  SiPytorch, // PyTorch
  SiGooglecolab, // Google Colab
  SiVisualstudiocode, // VS Code
  SiPowerbi, // Power BI
  SiTalend, // Talend
  SiFigma, // Figma
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTalend />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma /> {/* Figma for UI/UX design */}
      </Col>
    </Row>
  );
}

export default Toolstack;
