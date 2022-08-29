import React from "react";
import { NavLink } from "react-router-dom";
import myLogo from "./pic1.png";
import Button from "react-bootstrap/Button";
import "./Home.css";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Footer from "../../Components/Footer/Footer";
import Slide from "react-reveal/Slide";

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
            <Slide left>
              <p>
                I want to be a Web developer in an organization that helps me to
                learn and apply latest trends in software development.
              </p>
            </Slide>
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
            <Slide right>
              <img
                className="d-flex justify-content-md-center"
                src={myLogo}
                alt="Logo"
              />
            </Slide>
          </Col>
        </Row>
      </div>
      <Footer />
    </motion.div>
  );
}

export default Home;
