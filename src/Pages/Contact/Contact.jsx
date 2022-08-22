import React from "react";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaUserTie, FaAddressBook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Forminfo from "../../Components/Forminfo/Forminfo";
import { motion } from "framer-motion";
import "./Contact.css";

function Contact() {
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
      <div className="contact">
        <h2 className="heading">
          <b>Contact me</b>
        </h2>
        <Row style={{ marginLeft: "0" }}>
          <Col xs={12} lg={6}>
            <p>
              <b>Get in touch</b>
            </p>
            <p>
              remaining sheets containing Lorem Ipsum passages, and more
              recently with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.
            </p>

            <table>
              <tr>
                <td>
                  <FaUserTie className="icons" />
                </td>
                <td>
                  <h4>Name</h4>
                  <br /> <p>Rishad P</p>
                </td>
              </tr>

              <tr>
                <td>
                  <FaAddressBook className="icons" />
                </td>
                <td>
                  <h4>Address</h4>
                  <br /> <p>Calicut , Kerala , India</p>
                </td>
              </tr>

              <tr>
                <td>
                  <MdEmail className="icons" />
                </td>
                <td>
                  <h4>Email</h4>
                  <br /> <p>rishadofficial98@gmail.com</p>
                </td>
              </tr>
            </table>
          </Col>

          <Col xs={12} lg={6}>
            <Forminfo />
          </Col>
        </Row>
      </div>
    </motion.div>
  );
}

export default Contact;
