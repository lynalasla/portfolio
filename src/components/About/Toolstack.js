import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiJupyter,
  SiAnaconda,
  SiTensorflow,
  SiPytorch,
  SiGooglecolab,
  SiVisualstudiocode,
  SiPowerbi,
  SiTalend,
  SiFigma,
} from "react-icons/si";

function Toolstack() {
  const [tooltip, setTooltip] = useState("");

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        onMouseEnter={() => setTooltip("Jupyter Notebook")}
        onMouseLeave={() => setTooltip("")}
      >
        <SiJupyter />
        {tooltip && <div style={tooltipStyle}>{tooltip}</div>}
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        onMouseEnter={() => setTooltip("Anaconda")}
        onMouseLeave={() => setTooltip("")}
      >
        <SiAnaconda />
        {tooltip && <div style={tooltipStyle}>{tooltip}</div>}
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        onMouseEnter={() => setTooltip("TensorFlow")}
        onMouseLeave={() => setTooltip("")}
      >
        <SiTensorflow />
        {tooltip && <div style={tooltipStyle}>{tooltip}</div>}
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        onMouseEnter={() => setTooltip("PyTorch")}
        onMouseLeave={() => setTooltip("")}
      >
        <SiPytorch />
        {tooltip && <div style={tooltipStyle}>{tooltip}</div>}
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        onMouseEnter={() => setTooltip("Google Colab")}
        onMouseLeave={() => setTooltip("")}
      >
        <SiGooglecolab />
        {tooltip && <div style={tooltipStyle}>{tooltip}</div>}
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        onMouseEnter={() => setTooltip("VS Code")}
        onMouseLeave={() => setTooltip("")}
      >
        <SiVisualstudiocode />
        {tooltip && <div style={tooltipStyle}>{tooltip}</div>}
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        onMouseEnter={() => setTooltip("Power BI")}
        onMouseLeave={() => setTooltip("")}
      >
        <SiPowerbi />
        {tooltip && <div style={tooltipStyle}>{tooltip}</div>}
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        onMouseEnter={() => setTooltip("Talend")}
        onMouseLeave={() => setTooltip("")}
      >
        <SiTalend />
        {tooltip && <div style={tooltipStyle}>{tooltip}</div>}
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        onMouseEnter={() => setTooltip("UI/UX Design - Figma")}
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
  bottom: "-30px",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: "#333",
  color: "white",
  padding: "5px 10px",
  borderRadius: "5px",
  fontSize: "12px",
};

export default Toolstack;
