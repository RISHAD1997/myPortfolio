import React from "react";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import Button from "react-bootstrap/Button";
import CV from "./Resume.pdf";
import { motion } from "framer-motion";
import "./About.css";

function About() {
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
      <div className="about">
        <h2 style={{ marginBottom: "5%", fontWeight: "bold" }}>About</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <a href={CV} download="Resume" className="download-link">
          <Button variant="danger" className="download-button">
            Download CV
          </Button>
        </a>
      </div>
    </motion.div>
  );
}

export default About;
