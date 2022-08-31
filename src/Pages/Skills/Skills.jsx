import React from "react";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";
import "./Skills.css";
import Footer from "../../Components/Footer/Footer";
import Slide from "react-reveal/Slide";
import Skillbar from "../../Components/Skillbar/Skillbar";

function Skills() {
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
      <h2 className="skill-heading">My Skills</h2>
      <div className="skills">
        <Row>
          <Col xs={12} lg={6} className="description">
            <Slide left>
              <div>
                <p>
                  <b>My creative skills and experience</b>
                </p>
                <ul className="list">
                  <li>Good Listening skill</li>
                  <li>Creative thinking</li>
                  <li>Patience</li>
                  <li>Quick learner</li>
                </ul>
                <hr style={{ color: "#CFD2CF" }} />
                <p>Technical skills are given below.</p>
              </div>
            </Slide>
          </Col>

          <Col xs={12} lg={6}>
            <Slide left>
              <Skillbar />
            </Slide>
          </Col>
        </Row>
      </div>
      <div className="footerAdjust">
        <Footer />
      </div>
    </motion.div>
  );
}

export default Skills;
