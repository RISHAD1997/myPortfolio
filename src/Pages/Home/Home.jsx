import React from "react";
import { NavLink } from "react-router-dom";
import myLogo from "F:/React app/myPortfolio/src/images/pic1.png";
import Button from "react-bootstrap/Button";
import "./Home.css";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

function Home() {
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
      <div className="container">
        <Row>
          <Col
            className="details"
            lg={{ span: 6, order: "first" }}
            xs={{ span: 12, order: "last" }}
            md={{ span: 12, order: "last" }}
          >
            <p>
              <b>Welcome to my site</b>
            </p>
            <h1>
              Hi! i'm Rishad{" "}
              <span className="heading-color">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Front-End Developer")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Web Developer")
                      .start();
                  }}
                />
              </span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <div className="buttons">
              <NavLink to="/Contact">
                <Button variant="danger" className="buttons danger">
                  Hire me !
                </Button>
              </NavLink>
              <NavLink to="/Projects">
                <Button variant="outline-secondary" className="buttons">
                  See My Projects
                </Button>
              </NavLink>
            </div>
          </Col>

          <Col
            className="image"
            lg={{ span: 6, order: "last" }}
            xs={{ span: 12, order: "first" }}
            md={{ span: 12, order: "first" }}
          >
            <img
              className="d-flex justify-content-md-center"
              src={myLogo}
              alt="Logo"
            />
          </Col>
        </Row>
      </div>
    </motion.div>
  );
}

export default Home;
