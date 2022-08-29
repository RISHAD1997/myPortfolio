import React from "react";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import Recipe from "./Recipe.jpg";
import Netflix from "./Netflix.jpg";
import Ecommerce from "./Ecommerce.jpg";
import Game from "./Game.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";
import { useState } from "react";
import "./Projects.css";
import Footer from "../../Components/Footer/Footer";

function Projects() {
  const [isFlipped, setIsflipped] = useState(false);

  const handleHover = () => {
    setIsflipped(!isFlipped);
  };
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
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
            >
              <a href="https://foodee-x.herokuapp.com/">
                <img onMouseEnter={handleHover} src={Recipe} alt="ss" />
                <p style={{ textAlign: "center" }}>Recipe Search App</p>
              </a>
            </motion.div>
          </Col>
          <Col
            className="d-flex justify-content-center mb-4 image-box"
            lg={3}
            md={6}
            xs={12}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
            >
              <a href="https://rishad1997.github.io/netflix/">
                <img onMouseEnter={handleHover} src={Netflix} alt="ss" />
                <p style={{ textAlign: "center" }}>Netflix clone</p>
              </a>
            </motion.div>
          </Col>
          <Col
            className="d-flex justify-content-center mb-4 image-box"
            lg={3}
            md={6}
            xs={12}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
            >
              <a href="https://rishad1997.github.io/netflix/">
                <img src={Ecommerce} alt="ss" />
                <p style={{ textAlign: "center" }}>Ecommerce App</p>
              </a>
            </motion.div>
          </Col>
          <Col
            className="d-flex justify-content-center mb-4 image-box"
            lg={3}
            md={6}
            xs={12}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
            >
              <a href="https://rishad1997.github.io/Simon-Game/">
                <img src={Game} alt="ss" />
                <p style={{ textAlign: "center" }}>Memmory Game</p>
              </a>
            </motion.div>
          </Col>
        </Row>
      </div>
      <Footer />
    </motion.div>
  );
}

export default Projects;
