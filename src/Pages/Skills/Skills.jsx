import React from "react";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";
import "./Skills.css";
import Footer from "../../Components/Footer/Footer";
import Slide from "react-reveal/Slide";

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
            </Slide>
          </Col>

          <Col xs={12} lg={6} className="d-flex justify-content-center">
            <Slide right>
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
                    <span>CSS</span>
                  </div>
                  <div className="progress-line css">
                    <span></span>
                  </div>
                </div>

                <div className="Bar">
                  <div className="info">
                    <span>Bootstrap</span>
                  </div>
                  <div className="progress-line bootstrap">
                    <span></span>
                  </div>
                </div>

                <div className="Bar">
                  <div className="info">
                    <span>JavaScript</span>
                  </div>
                  <div className="progress-line javascript">
                    <span></span>
                  </div>
                </div>

                <div className="Bar">
                  <div className="info">
                    <span>React js</span>
                  </div>
                  <div className="progress-line react-js">
                    <span></span>
                  </div>
                </div>

                <div className="Bar">
                  <div className="info">
                    <span>Node js</span>
                  </div>
                  <div className="progress-line node-js">
                    <span></span>
                  </div>
                </div>

                <div className="Bar">
                  <div className="info">
                    <span>Python</span>
                  </div>
                  <div className="progress-line python">
                    <span></span>
                  </div>
                </div>

                <div className="Bar">
                  <div className="info">
                    <span>Git</span>
                  </div>
                  <div className="progress-line git">
                    <span></span>
                  </div>
                </div>
              </div>
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
