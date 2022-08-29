import React from "react";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import Button from "react-bootstrap/Button";
import CV from "./Resume.pdf";
import { motion } from "framer-motion";
import "./About.css";
import Footer from "../../Components/Footer/Footer";

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
          Every person has their own unique story. Here is a glimpse into mine.
          <br />
          <br />
          My name is Rishad P I am currently a Graduate Fellow. I compeleted my
          B-tech in Information Technology at college Of Engineering,
          Thalassery. I’ve worked hard in my education and now I’m ready to
          apply my knowledge into practice. I have a 6 month of experience in
          web development and also i completed MERN stack cource through online
          <br />
          <br />
          Now, I’m looking to leverage everything I’ve learned and get some
          hands-on work experience.
        </p>
        <a href={CV} download="Resume" className="download-link">
          <Button variant="danger" className="download-button">
            Download CV
          </Button>
        </a>
      </div>
      <Footer />
    </motion.div>
  );
}

export default About;
