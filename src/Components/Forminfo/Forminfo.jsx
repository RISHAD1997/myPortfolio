import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BiSend } from "react-icons/bi";
import "./Forminfo.css";

function Forminfo() {
  return (
    <div>
      <form action="https://formspree.io/f/xbjbjqwq" method="POST">
        <Row style={{ marginTop: "0" }}>
          <h4>Message me</h4>
          <Col xs={12} lg={6} className="textbox">
            <Form.Control type="text" placeholder="Name" name="name" required />
          </Col>
          <Col xs={12} lg={6} className="textbox">
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              required
            />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Form.Control
              type="text"
              className="mb-4"
              placeholder="Subject"
              name="subject"
              required
            />
          </Col>

          <Col lg={12}>
            <Form.Control
              as="textarea"
              rows={4}
              className="mb-4"
              placeholder="Message..."
              name="message"
              required
            />
          </Col>

          <Col className="button">
            <Button type="submit" variant="outline-danger">
              Send Message <BiSend />
            </Button>
          </Col>
        </Row>
      </form>
    </div>
  );
}

export default Forminfo;
