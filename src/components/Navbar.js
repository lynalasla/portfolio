import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { Link } from "react-scroll";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Accueil
                </Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> À Propos
                </Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineFundProjectionScreen
                    style={{ marginBottom: "2px" }}
                  />{" "}
                  Mes Projets
                </Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
                <Link
                  to="resume"
                  smooth={true}
                  duration={500}
                  onClick={() => updateExpanded(false)}
                >
                  <CgFileDocument style={{ marginBottom: "2px" }} /> Mon CV
                </Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
