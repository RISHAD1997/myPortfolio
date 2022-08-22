import React from "react";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import Recipe from "./Recipe.jpg";
import Netflix from "./Netflix.jpg";
import Ecommerce from "./Ecommerce.jpg";
import Game from "./Game.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";
import "./Projects.css";

function Projects() {
  return (
    <motion.div
      animate={{
        opacity: 1,
      }}
      initial={{
        opacity: 0,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <NavigationBar />

      <h2 className="projects">
        <b>Projects</b>
      </h2>
      <div className="row-margin">
        <Row className="mt-5">
          <Col
            className="d-flex justify-content-center mb-4 image-box"
            lg={3}
            md={6}
            xs={12}
          >
            <a href="https://foodee-x.herokuapp.com/">
              <img src={Recipe} alt="ss" />
            </a>
          </Col>
          <Col
            className="d-flex justify-content-center mb-4 image-box"
            lg={3}
            md={6}
            xs={12}
          >
            <a href="https://rishad1997.github.io/netflix/">
              <img src={Netflix} alt="ss" />
            </a>
          </Col>
          <Col
            className="d-flex justify-content-center mb-4 image-box"
            lg={3}
            md={6}
            xs={12}
          >
            <a href="https://rishad1997.github.io/netflix/">
              <img src={Ecommerce} alt="ss" />
            </a>
          </Col>
          <Col
            className="d-flex justify-content-center mb-4 image-box"
            lg={3}
            md={6}
            xs={12}
          >
            <a href="https://rishad1997.github.io/Simon-Game/">
              <img src={Game} alt="ss" />
            </a>
          </Col>
        </Row>
      </div>
    </motion.div>
  );
}

export default Projects;
