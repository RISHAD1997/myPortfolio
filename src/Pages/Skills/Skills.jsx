import React from "react";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";
import "./Skills.css";

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
            <p>
              <b>My creative skills and experience</b>
            </p>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Col>

          <Col xs={12} lg={6} className="d-flex justify-content-center">
            <div className="skillBar">
              <div className="Bar">
                <div className="info">
                  <span>HTML</span>
                </div>
                <div className="progress-line html">
                  <span></span>
                </div>
              </div>

              <div className="Bar">
                <div className="info">
                  <span>HTML</span>
                </div>
                <div className="progress-line css">
                  <span></span>
                </div>
              </div>

              <div className="Bar">
                <div className="info">
                  <span>HTML</span>
                </div>
                <div className="progress-line javascript">
                  <span></span>
                </div>
              </div>

              <div className="Bar">
                <div className="info">
                  <span>HTML</span>
                </div>
                <div className="progress-line react-js">
                  <span></span>
                </div>
              </div>

              <div className="Bar">
                <div className="info">
                  <span>HTML</span>
                </div>
                <div className="progress-line node-js">
                  <span></span>
                </div>
              </div>

              <div className="Bar">
                <div className="info">
                  <span>HTML</span>
                </div>
                <div className="progress-line git">
                  <span></span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </motion.div>
  );
}

export default Skills;
