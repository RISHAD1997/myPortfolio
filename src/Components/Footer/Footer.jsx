import React from "react";
import { motion } from "framer-motion";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 10,
        }}
      >
        <span>
          <a href="https://www.instagram.com/rishad_p/">
            <AiOutlineInstagram />
          </a>
        </span>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 10,
        }}
      >
        <span>
          <a href="https://www.linkedin.com/in/rishad98?">
            <AiFillLinkedin />
          </a>
        </span>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 10,
        }}
      >
        <span>
          <a href="https://github.com/RISHAD1997">
            <AiFillGithub />
          </a>
        </span>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 10,
        }}
      >
        <span>
          <a href="https://www.facebook.com/rishad.nandi.1/">
            <AiFillFacebook />
          </a>
        </span>
      </motion.div>
    </div>
  );
}

export default Footer;
